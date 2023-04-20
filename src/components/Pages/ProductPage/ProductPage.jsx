import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import s from './ProductPage.module.scss'
import { ImageSlider } from './Slider/Slider'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../store/cartSlice/cartSlice'
import { useSanityFetch } from '../../../hooks/useSanityFetch'
import { BreadCrumps } from '../../BreadCrumps/BreadCrumps'
import { useIsItemInCart } from '../../../hooks/useIsItemInCart'
import { Loader } from '../../Loader/Loader'

export const ProductPage = () => {
    const id = useParams().id
    const dispatch = useDispatch()
    const [sliderImages, setSliderImages] = useState([])
    const [colorPicker, setColorPicker] = useState([])
    const [options, setOptions] = useState({})
    const [itemSettings, setItemSettings] = useState({})

    const { data, loading, error } = useSanityFetch(`*[_type == "product" ][name == "${id}"]
    {_id,name,"category": category[0]->.category,
     image[]{...,image{asset->}}, filtering,
    colors[]{...,color_img[]{...,image{asset->}}} }`
    )
    const isInCart = useIsItemInCart(data[0]?._id)
    useEffect(() => {
        setSliderImages([])
        setColorPicker([])
        data[0]?.colors[0]?.color_img.map(el => setSliderImages(prev => [...prev, el]))

        data[0]?.colors.map(el => setColorPicker(prev => [...prev, el]))
        const addToOptions = () => {
            const optionsObject = {}
            data[0]?.filtering?.map(el => {
                optionsObject.hasOwnProperty(el.filter_name)
                    ? optionsObject[el.filter_name].push(el)
                    : optionsObject[el.filter_name] = [el]
            }
            )

            setOptions(optionsObject)
        }

        setItemSettings({
            id: data[0]?._id,
            name: data[0]?.name,
            color: data[0]?.colors[0].color_name,
            ...(data[0]?.filtering[0]?.filter_name) && {
                type: [data[0]?.filtering[0].value, data[0]?.filtering[0].shortcut]
            },
            ...(!data[0]?.filtering[0]?.filter_name) && {
                type: ['', '']
            },
            price: {
                new: data[0]?.filtering[0].price[0].new,
                old: data[0]?.filtering[0].price[0].old
            },
            filter_index: 0,
            img: data[0]?.colors[0].color_img[0].image.asset.url,
            quantity: 1,
        })

        addToOptions()
    }, [data])

    const handleProductColor = (e) => {
        console.log(e);
        setSliderImages(e.color_img)
        setItemSettings({ ...itemSettings, color: e.color_name, img: e.color_img[0].image.asset.url })
    }

    const handleOptions = (e, idx) => {
        console.log(e);
        setItemSettings({
            ...itemSettings, price: {
                new: e.price[0].new,
                old: e.price[0].old
            },
            type: [e.value, e.shortcut],
            filter_index: idx,

        })
    }

    const addProductToCart = () => {
        dispatch(addToCart(itemSettings))
    }

    if (loading) {
        return (
            <div className='loader'>
                <Loader />
            </div>
        )
    }



    return (
        <>
            <div className='container'>
                <div className={s.breadcrumps_container}>
                    <BreadCrumps data={[data[0]?.category, id]} />
                </div>

                <section className={s.product__info}>
                    <div className={s.mobile_title}>
                        <h1 className={s._title}>
                            {itemSettings.name && itemSettings.name} {itemSettings.type && itemSettings.type[0] + itemSettings.type[1]}  {itemSettings.color && `(${itemSettings.color})`}
                        </h1>
                        <div className={s._availability}>
                            <div className={s.available}>Available</div>
                            <div>Rating: 5.0</div>
                        </div>
                    </div>
                    <div className={s.slider}>
                        <ImageSlider sliderImages={sliderImages} />
                    </div>
                    <div className={s.product_right}>
                        <div className={s.desctop_title}>
                            <h1 className={s._title}>
                                {itemSettings.name && itemSettings.name} {itemSettings.type && itemSettings.type[0] + itemSettings.type[1]}  {itemSettings.color && `(${itemSettings.color})`}
                            </h1>
                            <div className={s._availability}>
                                <div className={s.available}>Available</div>
                                <div>Rating: 5.0</div>
                            </div>
                        </div>

                        <div className={s.price}>
                            <div className={s.price__old}>
                                {itemSettings?.price?.old} $
                            </div>
                            <div className={s.price__new}>
                                {itemSettings?.price?.new} $
                            </div>
                        </div>
                        <div className={s.__filter}>
                            {
                                !options[undefined] &&
                                Object.entries(options).map(([key, value], i) =>
                                    <div key={key} className={s.block}>
                                        <p>
                                            {key}:
                                        </p>
                                        <div className={s.itemsList}>
                                            {value.map((el, idx) =>
                                                <div key={el.value + idx}>
                                                    <input type="radio" name={key} id={el.value + el.shortcut} defaultChecked={idx === 0 ? true : false} />
                                                    <label htmlFor={el.value + el.shortcut} className={s.item} onClick={() => handleOptions(el, idx)}>
                                                        {el.value + el.shortcut}
                                                    </label>
                                                </div>)}
                                        </div>
                                    </div>)
                            }
                            <div className={s.block}>
                                <p>
                                    Colors:
                                </p>
                                <div className={s.itemsList}>
                                    {
                                        colorPicker.map(el =>
                                            <div key={el.color_hash}
                                                onClick={() => handleProductColor(el)}
                                                className={s.color}
                                                style={{ backgroundColor: `${el.color_hash}` }}></div>)
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={s.button}>
                            {
                                isInCart
                                    ? <NavLink to={'/cart'}>
                                        <button >Go to Cart</button>
                                    </NavLink>
                                    : <button onClick={addProductToCart}>
                                        Add to Cart
                                    </button>
                            }
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
