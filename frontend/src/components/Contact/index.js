/* eslint-disable max-len */
import React from 'react';

import * as S from './styles';

import desktop from '../../images/desktop.png';

const Contact = () => (
  <S.Content className="container">
    <S.LeftContent>
      <S.Title>Atendimento ao Cliente</S.Title>

      <S.Text>Precisando entrar em contato, utilize nossos canais de atendimento ou consulte a documentação para mais informações.</S.Text>

      <S.BtnTicket>Envie em ticket</S.BtnTicket>
      <S.BtnDoc>Documentação</S.BtnDoc>
    </S.LeftContent>

    <S.ImgDesktop src={desktop} alt="" />
  </S.Content>
);

export default Contact;
