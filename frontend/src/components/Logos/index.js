/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper-bundle.min';

import * as S from './styles';

import graphicriver from '../../images/graphicriver.png';
import audiojungle from '../../images/audiojungle.png';
import themeforest from '../../images/themeforest.png';
import codecanyon from '../../images/codecanyon.png';

SwiperCore.use([Navigation]);

const Logos = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/clients', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((json) => setClients(json));
  }, []);

  return (
    <S.Content className="swiper-logos">
      <Swiper
        spaceBetween={50}
        slidesPerView="auto"
        centeredSlides
        navigation
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
          },
        }}
      >
        {clients.length ? (
          clients.map((item) => (

            <SwiperSlide>
              <img src={graphicriver} alt="" />
            </SwiperSlide>
          ))

        ) : (
          <span>carregando...</span>
        )}
      </Swiper>

      <div className="swiper-bullet" />

    </S.Content>
  );
};

export default Logos;
