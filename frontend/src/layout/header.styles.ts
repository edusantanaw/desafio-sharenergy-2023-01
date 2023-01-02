import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 1em 3em;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  ul {
    display: flex;
    gap: 1.5em;
    align-items: center;

    a{
      font-size: 1.3em;
      color: #000;
    }
  }
`;
