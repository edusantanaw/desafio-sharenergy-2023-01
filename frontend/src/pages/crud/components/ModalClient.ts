import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 2;
  .close {
    width: 100%;
    height: 100vh;
    background-color: #000000f0;
    position: absolute;
  }
  .error{
    color: red;
  }
`;
export const Form = styled.form`
  background-color: #fff;
  z-index: 3;
  width: 40%;
  padding: 1.5em;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6em;
  h2 {
    font-size: 2.5em;
    font-weight: 500;
  }
  .column {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .row{
    display: flex;
    width: 100%;
    gap: 3em;
  }

  input[type="submit"]{
    width: 13em;
    height: 3em;
    background-color: blue;
    border: none;
    color: #fff;
    cursor: pointer;
  }


`;

export const Input = styled.input`
  height: 2.5em;
  border: none;
  border-bottom: 1px solid #000;

  &:focus{
    outline: none;
  }
`;

export const Label = styled.label`
    font-size: 1.02em;
`;

export const Button = styled.button`
    width: 10em;
    height: 3em;
    border: none;
    background-color: blue;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
`
