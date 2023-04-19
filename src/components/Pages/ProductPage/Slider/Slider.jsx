import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import './Slider.scss'

export const ImageSlider = ({ sliderImages }) => {
    const [imageList, setImageList] = useState([])


    useEffect(() => {
        setImageList(sliderImages)
    }, [sliderImages])

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'slider_container',
        customPaging: function (i) {
            return (
                <div className='slider_dot'>
                    <img width={100} src={imageList[i]?.image?.asset?.url} />
                </div>
            );
        },
    };

    return (
        <>
            <div className='slider_container'>
                <Slider {...settings}>
                    {
                        imageList?.map(el =>
                            <div className='slider_img' key={el._key}>
                                <img src={el?.image?.asset.url} alt={el?.alt} />
                            </div>)
                    }
                </Slider>
            </div>
        </>
    )
}
