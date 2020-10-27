import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Liga from '../../asset/liga.png';
import Premier from '../../asset/premier-league.jpg';
import Champoinship from '../../asset/champ.jpg';



const CarouselHeader = () => {
    return (
        <div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false} showStatus={false}>
                <div>
                    <img alt = 'shop-model' src= {Premier}/>
                </div>
                <div>
                    <img alt = 'shop-model' src= {Champoinship} />
                </div>
                <div>
                <img alt = 'shop-model' src= {Liga}/>
            </div>
            </Carousel>
        </div>
    );
}

export default CarouselHeader;