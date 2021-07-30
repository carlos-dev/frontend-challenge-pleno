import React from 'react';

import * as S from './styles';

import speedometer from '../../images/speedometer.png';
import card from '../../images/card.png';
import safeBox from '../../images/safeBox.png';

const Boxes = () => {
  return (
    <S.Content>
      <S.Box boxBlue>
        <S.ImgBox src={speedometer} />

        <S.Title>Estamos integrados</S.Title>

        <S.Text>Os títulos e descrições destes itens devem ser requisitados de uma API fictícia. Utilize o json-server para simular uma API.</S.Text>
      </S.Box>

      <S.Box>
        <S.ImgBox src={card} />

        <S.Title>Estamos integrados</S.Title>

        <S.Text>Os títulos e descrições destes itens devem ser requisitados de uma API fictícia. Utilize o json-server para simular uma API.</S.Text>
      </S.Box>

      <S.Box boxBlue>
        <S.ImgBox src={safeBox} />

        <S.Title>Estamos integrados</S.Title>

        <S.Text>Os títulos e descrições destes itens devem ser requisitados de uma API fictícia. Utilize o json-server para simular uma API.</S.Text>
      </S.Box>
    </S.Content>
  );
}

export default Boxes;
