import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 3vmin 0;
  margin: 0;
  position: absolute;
  top: 0;
  transition: transform 0.3s;
  
  @media (max-width: 1080px) {
    justify-content: flex-start;
    width: 55vmin !important;
    position: fixed;
    left: 0;
    height: 100%;
    padding: 3vmin 0 0 17vmin;
    z-index: 2;
    flex-direction: column;
    background: #43d9ce;
    transform:  ${(props) => (props.active ? 'translateX(0)' : 'translateX(-100%)')};
  }
`;

export const NavRight = styled.div`
  display: flex;

  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: baseline;
  }
`;

export const NavLeft = styled.div`
  display: flex;

  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;

export const Link = styled.a`
  color: #fff;
  font-size: 2.6vmin;
  margin-right: 5vmin;
  height: 4.4vmin;
  position: relative;

  @media (max-width: 1080px) {
    margin: 3vmin 3vmin 3vmin 0vmin;
    font-size: 4vmin;
  }

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
    font-size: 2.6vmin;

    @media (max-width: 1080px) {
      font-size: 3.6vmin;
    }
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

export const Search = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 5vmin;
  position: relative;
  width: 30vmin;
  
  .active {
    width: 100%;
    opacity: 1;

    @media (max-width: 1080px) {
      width: 86%;
      padding-left: 3vmin;
      font-family: 'Raleway', sans-serif;
    }
  }

  @media (max-width: 1080px) {
    margin: 1vmin 3vmin 1vmin 0vmin;
    flex-direction: row-reverse;
    position: relative;
    z-index: 1;
  }
`;

export const Input = styled.input`
  width: 0;
  outline: none;
  opacity: 0;
  position: absolute;
  right: 4vmin;
  padding: 0 0.5vmin;
  font-size: 2vmin;
  background: transparent;
  border: none;
  border-bottom: 0.3vmin solid #fff;
  color: #fff;
  transition: opacity 0.5s, width 0.4s;
`;

export const Button = styled.button`
  position: relative;
  z-index: 2;

  svg {
    @media (max-width: 1080px) {
      font-size: 3.7vmin;
    }
  }
`;

export const BtnHeader = styled.button`
  color: #fff;
  font-size: 2.2vmin;
  border-radius: 2vmin;
  border: 1px solid #fff;
  padding: 0.5vmin 1.3vmin;
  transition: background 0.3s, color 0.3s;
  font-family: 'Raleway', sans-serif;

  @media (max-width: 1080px) {
    margin: 1vmin 3vmin 1vmin 0vmin;
    font-size: 3.7vmin;
    border-radius: 3vmin;
  }

  :hover {
    color: #000;
    background: #fff;
  }
`;

export const MenuHamburger = styled.div`
  position: fixed;
  display: none;
  left: 4vmin;
  top: 4vmin;
  z-index: 3;
  background: #43D9CEaa;
  padding: 1vmin;

  @media (max-width: 1080px) {
    display: block;
  }

  span {
    display: block;
    color: rgb(255, 255, 255);
    height: 21px;
    width: 30px;
    border-top: 3px solid;
    cursor: pointer;
    z-index: 12;
    backface-visibility: hidden;
  
    ::before {
      content: "";
      display: block;
      height: 3px;
      margin-top: 6px;
      background: currentcolor;
      position: relative;
      transition: transform 0.3s ease 0s;
    }
    
    ::after {
      content: "";
      display: block;
      height: 3px;
      margin-top: 6px;
      background: currentcolor;
      position: relative;
      transition: transform 0.3s ease 0s;
    }
  }
`;
