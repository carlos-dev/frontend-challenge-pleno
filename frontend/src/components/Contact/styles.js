import styled from 'styled-components';

export const Content = styled.div`
  height: 81vmin;
  display: flex;
  align-items: center;

  button {
    width: 27vmin;
    height: 7vmin;
    border-radius: 0.4vmin;
    font-family: 'Roboto', sans-serif;
    font-size: 2.2vmin;
    color: #fff;
    letter-spacing: 0.1vmin;
  }

  @media (max-width: 1080px) {
    justify-content: center;
    height: 58vmin;
  }
`;

export const LeftContent = styled.div`
  width: 100vmin;

  @media (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 5vmin;
  margin-bottom: 3vmin;
`;

export const Text = styled.p`
  font-family: 'Roboto', sans-serif;
  color: #c7c7c7;
  font-size: 2.4vmin;
  line-height: 4vmin;
  margin: 2vmin 0 5vmin;

  @media (max-width: 1080px) {
    text-align: center;
  }
`;

export const ImgDesktop = styled.img`
  position: absolute;
  right: 0;
  height: 81vmin;
  z-index: -1;

  @media (max-width: 1080px) {
    display: none;
  }
`;

export const BtnTicket = styled.button`
  background: #04f385;
  margin-right: 5vmin;

  @media (max-width: 1080px) {
    margin: 0 0 3vmin 0;
  }
`;

export const BtnDoc = styled.button`
  background: #0196f5;
`;