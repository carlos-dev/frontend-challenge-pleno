import styled from 'styled-components';

export const Header = styled.header`
  background: ${(props) => (props.colors[0])};
  background: -moz-linear-gradient(101deg, ${(props) => (props.colors[0])} 0%, ${(props) => (props.colors[1])} 100%);
  background: -webkit-linear-gradient(101deg, ${(props) => (props.colors[0])} 0%, ${(props) => (props.colors[1])} 100%);
  background: linear-gradient(101deg, ${(props) => (props.colors[0])} 0%, ${(props) => (props.colors[1])} 100%);
  background: linear-gradient(101deg, ${(props) => (props.colors[0])} 0%, ${(props) => (props.colors[1])} 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#16e1cc",endColorstr="#9e22f5",GradientType=1);
  height: 100vmin;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .swiper-button-next:after, .swiper-button-prev:after {
    font-size: 7vmin;
  }
`;

export const ContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  
  button {
    padding: 2vmin 4vmin;
    border-radius: 0.5vmin;
    font-family: 'Roboto', sans-serif;
    color: #fff;
    margin: 0 4vmin;
    font-size: 2.5vmin;
  }
`;

export const Title = styled.h1`
  color: #fff; 
  font-size: 7vmin;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
`;

export const Text = styled.p`
  font-family: 'Roboto', sans-serif;
  color: #fff;
  text-align: center;
  font-size: 3vmin;
  width: 66%;
  margin: 5vmin 0 10vmin;
`;

export const BtnDemo = styled.button`
  background: #00baff;
  border: 0.4vmin solid #00baff;
`;

export const BtnStart = styled.button`
  color: #fff;
  border: 0.4vmin solid #fff;
`;

export const Wave = styled.img`
  position: absolute;
  width: 100%;
  bottom: 0;
  pointer-events: none;
`;
