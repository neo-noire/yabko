import React from 'react'
import './News.scss'
import { NewsItem } from './NewsItem/NewsItem'

export const News = () => {
    return (
        <section className='news'>
            <h2>Cupertino News</h2>
            <div className='news-list'>
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
            </div>
            <div className='button'>
                <button >Read Blog</button>
            </div>
        </section>
    )
}
