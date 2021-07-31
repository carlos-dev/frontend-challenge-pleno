import styled from 'styled-components';

export const Container = styled.section`
  background: #00192c;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15vmin 2vmin;
`;

export const Title = styled.h3`
  font-size: 4vmin;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
`;

export const Text = styled.p`
  color: #77828a;
  font-size: 2.4vmin;
  font-family: 'Roboto', sans-serif;
  margin: 4vmin 0 11vmin;
`;

export const Form = styled.form`
  display: flex;
`;

export const Input = styled.input`
  background: transparent;
  border: 1px solid #727f88;
  padding: 2vmin;
  outline: none;
  color: #fff;
  border-radius: 0.2rem;
  margin-right: 3vmin;
  width: 52vmin;
  font-size: 2.5vmin;
  font-family: 'Roboto', sans-serif;

  ::placeholder {
    color: #4d5e6c;
  }

  :-ms-input-placeholder {
    color: #4d5e6c;
  }

  ::-ms-input-placeholder {
    color: #4d5e6c;
  }
`;

export const BtnSubmit = styled.button`
  background: #0196f5;
  padding: 2vmin 7vmin;
  color: #fff;
  border-radius: 0.2rem;
  font-family: 'Roboto', sans-serif;
  font-size: 2.6vmin;
`;
