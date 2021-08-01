/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Content = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 6vmin 0;

  img {
    width: 27vmin;
  }

  .swiper-container {
    max-width: 83%;
    width: 100%;
    display: grid;
    justify-content: center;
  }

  .swiper-wrapper {
    justify-content: space-between;
    align-items: center;
  }

  .swiper-slide {
    width: 30vmin;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-button-next, 
  .swiper-button-prev {
    display: none;
    background: #fff;

    @media (max-width: 1100px) {
      display: flex;
    }
  }

  .swiper-button-prev {
    left: 0;
  }

  .swiper-button-next {
    right: 0;
  }

  .swiper-button-next:after, 
  .swiper-button-prev:after {
    font-size: 7vmin;
  }
`;
