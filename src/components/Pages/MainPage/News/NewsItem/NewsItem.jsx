import React from 'react'
import './NewsItem.scss'


export const NewsItem = () => {
    return (
        <div className='box'>
            <article className='news-item'>
                <div className='news-img'>
                    <img src="https://jabko.ua/image/cache/cataloge-2/BLOG2/1aApril/imgonline-com-ua-Resize-3hqgFUSd-430x1.jpeg.webp" alt="" />
                </div>
                <div className='news-item__text'>
                    <span className='news-item__clamp'>
                        Windows and MacOS updates and so so on can we survive it?
                        Windows and MacOS updates and so so on can we survive it?
                    </span>
                </div>

                <div className='bottom'>
                    <a>
                        Read article
                    </a>
                    <span>
                        date
                    </span>
                </div>

            </article>
        </div>
    )
}
