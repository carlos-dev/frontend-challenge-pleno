/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper-bundle.min';

import * as S from './styles';
import Loading from '../Loading';

SwiperCore.use([Navigation]);

const Logos = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch('https://frontend-challenge-pleno.herokuapp.com/clients', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((json) => setClients(json));
  }, []);

  return (
    <S.Content className="swiper-logos">
      <Swiper
        slidesPerView={2}
        centeredSlides
        navigation
        breakpoints={{
          1536: {
            slidesPerView: 4,
            navigation: true,
            centeredSlides: false,
          },

          1305: {
            slidesPerView: 4,
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
            <SwiperSlide key={item.id}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img src={item.image} alt={item.title} />
              </a>
            </SwiperSlide>
          ))
        ) : (
          <Loading />
        )}
      </Swiper>

      <div className="swiper-bullet" />
    </S.Content>
  );
};

export default Logos;
