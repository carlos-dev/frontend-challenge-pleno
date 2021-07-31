import styled from 'styled-components';

export const Content = styled.section`
  display: flex;
  justify-content: center;
  margin: 18vmin auto 7vmin;

  .swiper-slide {
    width: 60vmin;
  }
`;

export const Box = styled.div`
  width: 60vmin;
  height: 50vmin;
  background: ${props => props.boxBlue ? "#0195f5" : "transparent"};
  color: ${props => props.boxBlue ? "#fff" : "#000"};
  box-shadow: ${props => props.boxBlue ? '0 0 4vmin #999' : 'none' };
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 4vmin;

  @media (max-width: 1040px) {
    margin: auto;
  }
`;

export const ImgBox = styled.img`
  width: 9vmin;
`;

export const Title = styled.h4`
  font-size: 3vmin;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  margin: 3vmin 0 4vmin 0;
`;

export const Text = styled.p`
  font-size: 2.3vmin;
  text-align: center;
  line-height: 4vmin;
`;