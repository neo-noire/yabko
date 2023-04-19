import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Slider.scss'
import { useSanityFetch } from '../../hooks/useSanityFetch';
import { NavLink } from 'react-router-dom';

export const Carousel = () => {
    const { data, loading, error } = useSanityFetch(`*[_type == "hero"]
    {
      "id": _id,
        "category": category[0]->.category,
        "image": category_image.image.asset->.url
    }`)
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
                {
                    data && data.map(el =>
                        <NavLink key={el.id} to={`/${el.category}`}>
                            <div className={"imgContainer"}>
                                <img src={el.image} alt={el.category} />
                            </div>
                        </NavLink>)
                }
            </Slider>
        </div>
    )
}
