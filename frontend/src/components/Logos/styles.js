/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Content = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 6vmin 21vmin;

  img {
    width: 27vmin;
  }

  .swiper-wrapper {
    padding: 0 6vmin;
  }

  .swiper-slide {
    width: 30vmin;
    display: flex;
  }

  .swiper-button-next, 
  .swiper-button-prev {
    display: none;
    
    @media (max-width: 1100px) {
      display: flex;
    }
  }

  .swiper-button-next:after, 
  .swiper-button-prev:after {
    font-size: 7vmin;
  }

`;
