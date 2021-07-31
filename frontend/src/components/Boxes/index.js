import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper-bundle.min';

import * as S from './styles';

import speedometer from '../../images/speedometer.png';
import card from '../../images/card.png';
import safeBox from '../../images/safeBox.png';

const Boxes = () => {
  return (
    <S.Content>
      <Swiper
        slidesPerView={1}
        centeredSlides
        breakpoints={{
          1040: {
            slidesPerView: 'auto',
            centeredSlides: false,
          },
        }}
      >
        <SwiperSlide>
          <S.Box boxBlue>
            <S.ImgBox src={speedometer} />

            <S.Title>Estamos integrados</S.Title>

            <S.Text>Os títulos e descrições destes itens devem ser requisitados de uma API fictícia. Utilize o json-server para simular uma API.</S.Text>
          </S.Box>
        </SwiperSlide>
        
        <SwiperSlide>
          <S.Box>
            <S.ImgBox src={card} />

            <S.Title>Estamos integrados</S.Title>

            <S.Text>Os títulos e descrições destes itens devem ser requisitados de uma API fictícia. Utilize o json-server para simular uma API.</S.Text>
          </S.Box>
        </SwiperSlide>

        <SwiperSlide>
          <S.Box boxBlue>
            <S.ImgBox src={safeBox} />

            <S.Title>Estamos integrados</S.Title>

            <S.Text>Os títulos e descrições destes itens devem ser requisitados de uma API fictícia. Utilize o json-server para simular uma API.</S.Text>
          </S.Box>
        </SwiperSlide>
      </Swiper>
    </S.Content>
  );
}

export default Boxes;
