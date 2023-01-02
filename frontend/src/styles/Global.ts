import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
    }
    body {
        background-color: #fff;
    }
    li{
        list-style: none;
    }
    a{
        text-decoration: none;
    }

`;

export const Label = styled.label<{ size?: string }>`
  font-size: ${(props) => (props.size ? props.size : "1.2em")};
`;

export const Input = styled.input<{ width?: string; height?: string }>`
  width: ${(props) => (props.width ? props.width : "10em")};
  height: ${(props) => (props.height ? props.height : "3.3em")};
  padding: 0.5em;
  border: none;
  background-color: #dfdfdf;
  border-radius: 7px;

  &:focus{
    outline: none;
  }
`;
