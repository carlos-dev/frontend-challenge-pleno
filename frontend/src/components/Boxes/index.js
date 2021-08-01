import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper-bundle.min';

import * as S from './styles';

import speedometer from '../../images/speedometer.png';
import card from '../../images/card.png';
import safeBox from '../../images/safeBox.png';

SwiperCore.use([Navigation]);

const Boxes = () => {
  const [services, setServices] = useState([]);
  const arrayImage = [speedometer, card, safeBox];

  useEffect(() => {
    fetch('http://localhost:3000/services', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((json) => setServices(json));
  }, []);

  console.log(services);
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
        <span>carregando...</span>
      )}
    </S.Content>
  );
};

export default Boxes;
