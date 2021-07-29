import React from 'react';

import * as S from './styles';

import graphicriver from '../../images/graphicriver.png';
import audiojungle from '../../images/audiojungle.png';
import themeforest from '../../images/themeforest.png';
import codecanyon from '../../images/codecanyon.png';

const Logos = () => {
  return (
    <S.Content>
      <img src={graphicriver} alt="" />
      <img src={themeforest} alt="" />
      <img src={audiojungle} alt="" />
      <img src={codecanyon} alt="" />
    </S.Content>
  );
}

export default Logos;
