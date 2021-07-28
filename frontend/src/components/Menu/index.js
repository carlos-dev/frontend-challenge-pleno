import React from 'react';
import { FiSearch } from 'react-icons/fi';

import * as S from './styles';

const Menu = () => {
  return (
    <S.Nav className="container">
      <div className="">
        <S.Logo href="">
          <S.LogoLeft>Site</S.LogoLeft>
          <S.LogoRight>Demo</S.LogoRight>
        </S.Logo>

        <S.Link href="#">Sobre</S.Link>

        <S.Link href="#">Preços</S.Link>

        <S.Link href="#">Desenvolvedores</S.Link>
      </div>

      <div className="">
        <button><FiSearch color="#fff" fontSize="2.6vmin" /></button>
        <S.Link href="">Ajuda</S.Link>

        <S.Link href="">Contato</S.Link>

        <S.BtnHeader>Começar</S.BtnHeader>
      </div>
    </S.Nav>
  );
}

export default Menu;
