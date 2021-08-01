/* eslint-disable import/prefer-default-export */
import styled, { keyframes } from 'styled-components';

const animationSpinner = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  font-size: 1vmin;
  margin: 15px auto;
  text-indent: -9999em;
  width: 11em;
  height: 11em;
  border-radius: 50%;
  background: #2c95f5;
  position: relative;
  animation: ${animationSpinner} 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);

  ::before {
    content: '';
    width: 50%;
    height: 50%;
    background: #ffffff;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
  }

  ::after {
    content: '';
    background: #fff;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;
