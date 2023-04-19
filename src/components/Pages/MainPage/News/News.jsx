import React from 'react'
import './News.scss'
import { NewsItem } from './NewsItem/NewsItem'
import { AnimationOnScroll } from 'react-animation-on-scroll';

export const News = () => {
    return (
        <section className='news'>
            <h2>Cupertino News</h2>
            <div className='news-list'>
                <AnimationOnScroll animateIn="animate__fadeInLeftBig">
                    <NewsItem />
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeInLeftBig">
                    <NewsItem />
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeInRightBig">
                    <NewsItem />
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeInRightBig">
                    <NewsItem />
                </AnimationOnScroll>
                
            </div>
            <div className='button'>
                <button >Read Blog</button>
            </div>
        </section>
    )
}
