import styled from "styled-components";

export const ClientContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .columns{
    width: 85%;
    display: flex;
    font-size: 1.3em;
    font-weight: 300;
    color: #D80032;
    justify-content: space-around;
    padding: 1em 0.5em 1em 3.5em;
  }
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
    border: 1px solid #8D99AE;
    width: 85%;
    padding: 1.5em 1em;
    font-size: 1em;
    color: #fff;
    font-weight: 300;
    gap: 0.6em;
  }

  span{
    padding: 0;
  }
`;
