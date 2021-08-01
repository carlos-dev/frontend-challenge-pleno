/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper-bundle.min';

import Loading from '../Loading';

import * as S from './styles';

SwiperCore.use([Navigation]);

const Boxes = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('https://frontend-challenge-pleno.herokuapp.com/services', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((json) => setServices(json));
  }, []);

  return (
    <S.Content>
      {services.length ? (
        <Swiper
          slidesPerView={1}
          centeredSlides
          navigation
          breakpoints={{
            1040: {
              slidesPerView: 'auto',
              centeredSlides: false,
            },
          }}
        >
          {services.map((item) => (
            <SwiperSlide key={item.id}>
              <S.Box boxBlue={item.id % 2 !== 0}>
                <S.ImgBox src={item.image} />

                <S.Title>{item.title}</S.Title>

                <S.Text>{item.description}</S.Text>
              </S.Box>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Loading />
      )}
    </S.Content>
  );
};

export default Boxes;
