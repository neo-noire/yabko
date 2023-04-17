import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Slider.scss'

export const Carousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 900,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dotsClass: 'dots',
        appendDots: dots => (
            <ul style={{ margin: "0px" }}> {dots} </ul>
        ),
    };
    return (
        <div className='slider'>

            <Slider {...settings}>
                <div className={"imgContainer"}>
                    <img src="https://jabko.ua/image/cache/cataloge-2/slider/dyson-max-1700.jpg" alt="" />
                </div>
                <div className={"imgContainer"}>
                    <img src="https://jabko.ua/image/cache/cataloge-2/silder-2/ecoflow-3300-900%20(1)-max-1700.jpg" alt="" />
                </div>
                <div className={"imgContainer"}>
                    <img src="https://jabko.ua/image/cache/cataloge-2/slider/MOB-2022/gopro-max-1700.jpg" alt="" />
                </div>
                <div className={"imgContainer"}>
                    <img src="https://jabko.ua/image/cache/cataloge-2/bg-banner/watch%20ultra%20(1)-max-1700.jpg.webp" alt="" />
                </div>
            </Slider>
        </div>
    )
}
