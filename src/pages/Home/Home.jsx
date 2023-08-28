import React, { useState, useRef} from 'react';
import { movies } from '../../data/movies';
import classNames from 'classnames/bind';
import styles from './Home.modules.scss'
import {FaChevronLeft,FaChevronRight} from "react-icons/fa";
import Slider from 'react-slick';
import "~slick-carousel/slick/slick.css"; 
import "~slick-carousel/slick/slick-theme.css";

const cx = classNames.bind(styles);
function Home(){
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
    return(
        <div className={cx('list-film-hot')}>
            <h2 className={('title-box')}>
                <a className={cx('tophot')}>PHIM HOT</a>
            </h2>
            <div className={cx('btnLeft')} onClick={handlePrevClick} disabled={currentSlide === 0}>
                <FaChevronLeft/>
            </div>
            <div className={cx('btnRight')} onClick={handleNextClick} disabled={currentSlide === 0}>
                <FaChevronRight/>
            </div>
            <Slider {...settings}>
                <div className={cx('movie-slider')}>
                    {
                        movies.map((movie,index) =>(
                            <div key={index} className={cx('movieItem')}>
                                <img src={movie} alt="" />
                                <span className={cx('movieName')}>Movie Name</span>
                            </div>
                        ))
                    }
                </div>
            </Slider>
        </div>
    )
}
export default Home;