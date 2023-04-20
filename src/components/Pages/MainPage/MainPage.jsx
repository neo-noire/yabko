import React from 'react'
import { Carousel } from '../../Slider/Slider'
import { Tabs } from './Tabs/Tab/Tabs'
import '../../../index.scss'
import { News } from './News/News'
import { About } from './About/About'
import useMediaQuery from '@mui/material/useMediaQuery';
import { CategorySelect } from './CategorySelect/CategorySelect'
import { useSanityFetch } from '../../../hooks/useSanityFetch'
import { Loader } from '../../Loader/Loader'

const fetchQuery = `{"tabs":*[_type == "tabs"]
{tabs, _id, items[]->{name,_id,"category":category[0]->.category,filtering,colors, image[]{...,image{asset->}},colors[]{color_hash,color_name,color_img[]{alt,image{asset->}}}}}, 
"category": *[_type == "category"]{
  category,
    "id": _id,
    "category_image": category_image.image.asset->.url
},
"hero" :*[_type == "hero"]
{
"id": _id,
  "category": category[0]->.category,
  "image": category_image.image.asset->.url
}
}`

export const MainPage = () => {
    const mobile = useMediaQuery('(min-width:600px)');
    const { data, loading, error } = useSanityFetch(fetchQuery)

    if (loading) {
        return (
            <div className='loader'>
                <Loader />
            </div>
        )
    }

    return (
        <>
            <Carousel />
            <div className='container'>
                {
                    mobile
                        ? <Tabs data={data} loading={loading} />
                        : <CategorySelect data={data.category} loading={loading} />
                }

                <News />
                <About />
            </div>
        </>
    )
}
