import React from 'react'
import { Carousel } from '../../Slider/Slider'
import { Tabs } from './Tabs/Tab/Tabs'
import '../../../index.scss'
import { News } from './News/News'
import { About } from './About/About'
import useMediaQuery from '@mui/material/useMediaQuery';
import { CategorySelect } from './CategorySelect/CategorySelect'


export const MainPage = () => {
    const mobile = useMediaQuery('(min-width:600px)');

    return (
        <>
            <Carousel />
            <div className='container'>
                {
                    mobile
                        ? <Tabs />
                        : <CategorySelect />
                }

                <News />
                <About />
            </div>
        </>
    )
}
