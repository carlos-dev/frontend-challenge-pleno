import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import * as S from './styles';

const Menu = () => {
  const [inputActive, setInputActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  return (
    <>
      <S.MenuHamburger onClick={() => setMenuActive(!menuActive)}>
        <span />
      </S.MenuHamburger>

      <S.Nav className="container" active={menuActive}>
        <S.NavRight>
          <S.Logo href="">
            <S.LogoLeft>Site</S.LogoLeft>
            <S.LogoRight>Demo</S.LogoRight>
          </S.Logo>

          <S.Link href="#">Sobre</S.Link>

          <S.Link href="#">Preços</S.Link>

          <S.Link href="#">Desenvolvedores</S.Link>
        </S.NavRight>

        <S.NavRight>
          <S.Search>
            <S.Button onClick={() => setInputActive(!inputActive)}><FiSearch color="#fff" fontSize="2.6vmin" /></S.Button>
            <S.Input type="search" id="search" className={inputActive && 'active'} />
          </S.Search>
          <S.Link href="">Ajuda</S.Link>

          <S.Link href="">Contato</S.Link>

          <S.BtnHeader>Começar</S.BtnHeader>
        </S.NavRight>
      </S.Nav>
    </>
  );
};

export default Menu;
