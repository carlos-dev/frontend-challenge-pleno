import React from 'react';

import Menu from '../Menu';

import * as S from './styles';

import wave1 from '../../images/wave1.png';
import wave2 from '../../images/wave2.png';

const Header = () => {
  return (
    <S.Header>
      <Menu />

      <S.ContentHeader>
        <S.Title>Recrie este Banner!</S.Title>

        <S.Text>Além deste banner inicial, desenvolva esta área com possibilidade de mais banners, com outras imagens ou vídeo ao fundo também. Utilize toda sua criativade para dar vida a este site, mas atenção para o responsivo é importante que o site se adapte e fique legível.</S.Text>

        <div>
          <S.BtnDemo>Sobre o SiteDemo</S.BtnDemo>
          <S.BtnStart>Começar</S.BtnStart>
        </div>
      </S.ContentHeader>

      <S.Wave src={wave1} className="wave" alt="" />
      <S.Wave src={wave2} className="wave" alt="" />
    </S.Header>
  );
}

export default Header;
