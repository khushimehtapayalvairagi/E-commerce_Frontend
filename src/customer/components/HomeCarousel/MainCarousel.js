import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { HomeCarouselData } from './HomeCarouselData';
import './MainCarousel.css';


const MainCarousel = () => {
    const items = HomeCarouselData.map((item, index) => (
        <div className="carousel-slide" key={index}>
          <img
            className="carousel-image"
            src={item.image}
            alt={`Slide ${index + 1}`}
            role="presentation"
          />
          <div className="carousel-caption">
            <h2>{item.caption}</h2>
            <p>{item.subtext}</p>
          </div>
        </div>
      ));

return (
    <AliceCarousel
      mouseTracking
      items={items}
      autoPlay
      autoPlayInterval={2000}
      infinite
      disableButtonsControls
      disableDotsControls
    />)
};
export default MainCarousel;