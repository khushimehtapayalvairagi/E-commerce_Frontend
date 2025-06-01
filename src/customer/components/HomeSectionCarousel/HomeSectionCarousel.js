import React, { useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../HomesectionCard/HomeSectionCard';
import { Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { mensKurta } from '../../../Data/MensKurta';

const HomeSectionCarousel = ({data,sectionName}) => {
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const items = (data || []).slice(0, 10).map((item, i) => (
  <HomeSectionCard key={i} product={item} />
));


  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  return (
    <div className='border'>
        <h2 className='text-2xl font-extrabold text-gray-800 py-5 text-left'>{sectionName}</h2>
      <div className='relative p-5'>
        <AliceCarousel
          mouseTracking
          items={items}
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
          ref={carouselRef}
        />
        <Button
          variant='contained'
          className='z-50 bg-white'
          onClick={slidePrev}
          sx={{
            position: 'absolute',
            top: '8rem',
            left: '0rem',
            transform: 'translateX(-50%) rotate(-90deg)',
            bgcolor: 'white',
          }}
          aria-label='previous'
        >
          <ArrowBackIosNewIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
        </Button>
        <Button
          variant='contained'
          className='z-50 bg-white'
          onClick={slideNext}
          sx={{
            position: 'absolute',
            top: '8rem',
            right: '0rem',
            transform: 'translateX(50%) rotate(90deg)',
            bgcolor: 'white',
          }}
          aria-label='next'
        >
          <ArrowBackIosIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
        </Button>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
