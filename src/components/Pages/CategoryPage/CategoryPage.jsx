import React, { useEffect, useRef, useState } from 'react'
import s from './CategoryPage.module.scss'
import { NavLink, useParams } from 'react-router-dom'
import { Card } from '../../Card/Card'
import { Filter, FilterItem } from './Filter/Filter'
import { GiSettingsKnobs } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { useSanityFetch } from '../../../hooks/useSanityFetch'
import { BreadCrumps } from '../../BreadCrumps/BreadCrumps'
import { Loader } from '../../Loader/Loader'


export const CategoryPage = () => {
    const [mobFiltersOpen, setMobFiltersOpen] = useState(false)
    const [filterDropdown, setFilterDropdown] = useState({})
    const [filter, setFilter] = useState([])
    const ref = useRef()
    const id = useParams().id

    const { data, loading, error } = useSanityFetch(`*[_type == "category"]{category, items[]-> }[category match "${id}"]
    {items[${filter.length > 0 ? `(${filter
            .map((el, idx) => {
                if (el[0] === 'name') {
                    return `${idx > 0 ? ` || ` : ''} ${el[0]} match "${el[1]}"`
                } else {
                    return `${idx > 0 ? ` || ` : ''} ${el[1].split(' ')[0]} in filtering[].value`
                }
            }
            ).join('')})` : ''}
      ]{..., "category": category[0]->.category, image[]{...,image{asset->}}, 
      colors[]{...,color_img[]{...,image{asset->}}} }} `)

    useEffect(() => {
        const filterDropdownHandler = () => {
            if (filter.length > 0) return
            const obj = {}
            const array = [];
            ref.current = [];
            data[0]?.items?.map(el => {
                ref.current.push(['name', el.name])
                el.filtering.map(el => {
                    el.filter_name &&
                        array.push(el)
                }
                )
            }
            )
            array.map(el => {
                obj.hasOwnProperty(el.filter_name)
                    ? obj[el.filter_name] = [...new Set([...obj[el.filter_name], `${el.value} ${el.shortcut}`])]
                    : obj[el.filter_name] = [`${el.value} ${el.shortcut}`]
            })
            setFilterDropdown(obj)
        }

        data && filterDropdownHandler()
    }, [data])

    const handleFilter = (objKey, item) => {
        const itemInArray = filter.find(el => el[1] === item)
        itemInArray
            ? setFilter(filter.filter(el => el !== itemInArray))
            : setFilter([...filter, [objKey, item]])
    }


    // if(loading) {
    //     return (
    //         <div className='loader'>
    //             <Loader />
    //         </div>
    //     )
    // }

    console.log(filterDropdown);

    return (
        <>
            <div className={mobFiltersOpen ? `${s.mobileMenuFilters} ${s.open}` : s.mobileMenuFilters}>
                <div className={s.filtersTitle}>
                    Filters
                    <button onClick={() => setMobFiltersOpen(false)}>
                        <AiOutlineClose size={20} />
                    </button>
                </div>
                <div className={s.mobileFiltersList}>
                    <Filter label='Model'>
                        {ref && ref?.current?.map((el, idx) =>
                            <FilterItem key={el[1]} filter={el[1]} handleFilter={handleFilter} objKey={el[0]} />
                        )}
                    </Filter>

                    {
                        !filterDropdown[undefined] &&
                        Object.entries(filterDropdown).map(([key, val] = entry) =>
                            <Filter key={key} label={key}>
                                {
                                    val.map(el =>
                                        <FilterItem handleFilter={handleFilter} key={el} filter={el} objKey={key} />
                                    )
                                }
                            </Filter>)
                    }
                </div>
            </div>
            <div className={mobFiltersOpen ? s.content + ' ' + s.freeze : s.content}>
                <div className={s.container}>
                    <BreadCrumps data={[id]} />
                </div>

                <div className={s.mobileFiltersBtn}
                    onClick={() => setMobFiltersOpen(!mobFiltersOpen)}>
                    <GiSettingsKnobs size={20} style={{ transform: "rotate(90deg)" }} />
                    <span>
                        Open Filters
                    </span>
                </div>

                <div className={`${s.products + ' ' + s.container}`}>
                    <div className={s.filters}>
                        <Filter label='Model'>
                            {ref && ref?.current?.map((el, idx) =>
                                <FilterItem handleFilter={handleFilter} key={el[1] + idx} filter={el[1]} objKey={el[0]} />
                            )}
                        </Filter>
                        {
                            Object.entries(filterDropdown).map(([key, val] = entry) =>
                                <Filter key={key} label={key}>
                                    {
                                        val.map(el =>
                                            <FilterItem handleFilter={handleFilter} key={el} filter={el} objKey={key} />
                                        )
                                    }
                                </Filter>)
                        }
                    </div>
                    <h2>Apple {id}</h2>
                    <div className={s.itemsList}>
                        {
                            loading
                                ? <div className='loader'>
                                    <Loader />
                                </div>
                                :
                                data && data[0]?.items?.map((el, idx) =>
                                    <div key={el._id + idx} className={s.item}>
                                        <Card data={el} category={el.category} />
                                    </div>
                                )

                        }
                    </div>

                </div>
            </div>
        </>
    )
}
