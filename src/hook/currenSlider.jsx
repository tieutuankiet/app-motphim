import React, { useState, useRef} from 'react';
import Slider from 'react-slick';
import "~slick-carousel/slick/slick.css"; 
import "~slick-carousel/slick/slick-theme.css";
import { movies } from '../data/movies';
const Carousel = () =>{
    const [currentSlide , setCurrentSlide] = useState(0);

    const settings = {
        dots: false,
        isFinite: true,
        speed: 500,
        slidesToShow:1,
        slidesToScroll: 1,
        afterChange: (index) => {
            setCurrentSlide(index);
        }
    }
    const handlePrevClick = () =>{
        setCurrentSlide(currentSlide - 1);
    }
    const handleNextClick = () =>{
        setCurrentSlide(currentSlide + 1 )
    }
}
export default Carousel;