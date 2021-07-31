import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper-bundle.min';

import * as S from './styles';

import graphicriver from '../../images/graphicriver.png';
import audiojungle from '../../images/audiojungle.png';
import themeforest from '../../images/themeforest.png';
import codecanyon from '../../images/codecanyon.png';


const Logos = () => {
  return (
    <S.Content className="swiper-logos">
      <Swiper
        spaceBetween={50}
        slidesPerView='auto'
        centeredSlides={true}
        breakpoints={{
          1536: {
            slidesPerView: 4,
            spaceBetween: 240,
            navigation: true,
            centeredSlides: false,
          },

          1305: {
            spaceBetween: 90,
            centeredSlides: false,
          },

          1100: {
            slidesPerView: 4,
            centeredSlides: false,
          },

          800: {
            slidesPerView: 3,
            centeredSlides: false,
          },

          700: {
            slidesPerView: 2,
            centeredSlides: false,
          }
        }}
      >
        <SwiperSlide>
          <img src={graphicriver} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={themeforest} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={audiojungle} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={codecanyon} alt="" />
        </SwiperSlide>
      </Swiper>

      <div className="swiper-bullet" />

    </S.Content>
  );
}

export default Logos;
