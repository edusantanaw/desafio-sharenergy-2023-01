import styled from "styled-components";

export const ClientContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  #eye{
    display: flex;
    align-items: center;
    gap: 0.4em;
    cursor: pointer;
    transition: 0.2s;
    svg{
      font-size: 1.3em;
    }
    &:hover{
      color: #EF233C;
    }
  }
`;

export const ClientList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap:  1em;
  flex-wrap: wrap;
  padding-bottom: 3em;
  li {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px solid #8D99AE;
    width: 85%;
    padding: 1.5em 3em;
    font-size: 1em;
    color: #fff;
    font-weight: 300;
    gap: 1em;
  }

  span{
    padding: 0;
  }
`;
