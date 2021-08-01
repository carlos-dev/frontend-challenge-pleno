/* eslint-disable max-len */
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';

import Menu from '../Menu';

import * as S from './styles';

import wave1 from '../../images/wave1.png';
import wave2 from '../../images/wave2.png';

SwiperCore.use([Navigation]);

const Header = () => {
  const [index, setIndex] = useState(0);
  const slides = [1, 2, 3];
  const colorsGradient = [
    ['#16e1cc', '#9e22f5'],
    ['#83B02A', '#C2E37F'],
    ['#4D3DF5', '#CACF93'],
  ];

  return (
    <S.Header colors={colorsGradient[index]}>
      <Menu />

      <Swiper
        onSlideChange={(swipe) => setIndex(swipe.activeIndex)}
        navigation
      >
        {slides.map((item) => (
          <SwiperSlide key={item}>
            <S.ContentHeader>
              <S.Title>Recrie este Banner!</S.Title>

              <S.Text>Além deste banner inicial, desenvolva esta área com possibilidade de mais banners, com outras imagens ou vídeo ao fundo também. Utilize toda sua criativade para dar vida a este site, mas atenção para o responsivo é importante que o site se adapte e fique legível.</S.Text>

              <div>
                <S.BtnDemo>Sobre o SiteDemo</S.BtnDemo>
                <S.BtnStart>Começar</S.BtnStart>
              </div>
            </S.ContentHeader>
          </SwiperSlide>
        ))}
      </Swiper>

      <S.Wave src={wave1} className="wave" alt="" />
      <S.Wave src={wave2} className="wave" alt="" />
    </S.Header>

  );
};

export default Header;
