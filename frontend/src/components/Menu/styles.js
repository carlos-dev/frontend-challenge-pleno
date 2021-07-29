import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 3vmin 0;
  margin: 0;
  position: absolute;
  top: 0;
`;

export const Link = styled.a`
  color: #fff;
  font-size: 2.6vmin;
  margin-right: 5vmin;
  height: 4.4vmin;
  position: relative;

  ::before {
    content: "";
    position: absolute;
    left: 0;
    right: 100%;
    bottom: -0.5vmin;
    background: #fff;
    height: 0.5vmin;
    border-radius: 0.8vmin;
    border-radius:
    -webkit-transition-property: right;
    transition-property: right;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }

  :hover::before {
    right: 0;
  }
`;

export const Logo = styled.a`
  margin-right: 5vmin;
  display: inline-block;

  span {
    color: #fff;
  }
`;

export const LogoLeft = styled.span`
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
`;

export const LogoRight = styled.span`
  font-family: 'Raleway', sans-serif;
  font-weight: 100;
`;

export const BtnHeader = styled.button`
  color: #fff;
  font-size: 2.2vmin;
  border-radius: 2vmin;
  border: 1px solid #fff;
  padding: 0.5vmin 1.3vmin;
  transition: background 0.3s, color 0.3s;

  :hover {
    color: #000;
    background: #fff;
  }
`;