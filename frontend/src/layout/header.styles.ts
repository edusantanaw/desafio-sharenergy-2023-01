import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 1em 7em;
  display: flex;
  justify-content: space-between;
  color: #fff;
  position: fixed;
  background-color: #0E1128;
  z-index:2;
  ul {
    display: flex;
    gap: 1.5em;
    align-items: center;

    a{
      font-size: 1.2em;
      color: #fff;
      font-weight: 300;
      transition: 0.3s;
      &:hover{
        color: #EF233C;
      }
    }
  }
`;
