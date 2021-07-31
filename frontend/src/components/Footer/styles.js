import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 4vmin 0;

  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;

export const Logo = styled.a`
  margin-right: 5vmin;
  display: inline-block;

  span {
    font-size: 2.6vmin;
  }
`;

export const LogoLeft = styled.span`
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
  color: #0196f5;
`;

export const LogoRight = styled.span`
  font-family: 'Raleway', sans-serif;
  font-weight: 100;
  color: #b7b7b7;
`;

export const NavLink = styled.div`
  @media (max-width: 1080px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Link = styled.a`
  color: #b7b7b7;
  font-size: 2.3vmin;
  margin-right: 4vmin;

  @media (max-width: 1080px) {
    margin: 1vmin 0;
  }
`;

export const TextContact = styled.span`  
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  margin: 0 1.2vmin;
  font-size: 2.6vmin;
`;