import React from 'react';

import * as S from './styles';

const Newsletter = () => {
  return (
    <S.Container>
      <S.Title>Newsletter</S.Title>

      <S.Text>Receba nossas informações por email e fique sabendo de todas as novidades</S.Text>

      <S.Form>
        <S.Input type="email" id="email" placeholder="Seu e-mail" required />

        <S.BtnSubmit>Salvar</S.BtnSubmit>
      </S.Form>
    </S.Container>
  );
}

export default Newsletter;
