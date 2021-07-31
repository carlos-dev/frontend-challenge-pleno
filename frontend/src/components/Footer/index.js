import React from 'react';

import * as S from './styles';

const Footer = () => (
  <S.Footer className="container">
    <S.Logo href="#">
      <S.LogoLeft>Site</S.LogoLeft>
      <S.LogoRight>Demo</S.LogoRight>
    </S.Logo>

    <S.NavLink>
      <S.Link href="#">Home</S.Link>
      <S.Link href="#">Sobre</S.Link>
      <S.Link href="#">Preços</S.Link>
      <S.Link href="#">Desenvolvedores</S.Link>
      <S.Link href="#">Ajuda</S.Link>
      <S.Link href="#">Contato</S.Link>
    </S.NavLink>

    <div>
      <S.TextContact>+80 1234 56789</S.TextContact>
      <S.TextContact>|</S.TextContact>
      <S.TextContact>ola@sitedemo.com.br</S.TextContact>
    </div>
  </S.Footer>
);

export default Footer;
