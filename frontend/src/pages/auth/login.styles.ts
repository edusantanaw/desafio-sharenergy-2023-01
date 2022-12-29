import styled from "styled-components";

export const LoginContainer = styled.section`
  width: 100%;
  height: 100vh;
`;

export const Form = styled.form``;

export const Label = styled.label<{ size?: string }>`
  font-size: ${(props) => (props.size ? props.size : "1.5em")};
`;

export const Input = styled.input<{ width?: string; height?: string }>`
  width: ${(props) => (props.width ? props.width : "10em")};
  height: ${(props) => (props.height ? props.height : "2.5em")};
`;
