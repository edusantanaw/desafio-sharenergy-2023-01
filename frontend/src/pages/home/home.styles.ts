import styled from "styled-components";

export const HomeContainer = styled.section`
  width: 100%;
  padding: 2em 4em;
  display: flex;
  justify-content: center;
  .content {
    background-color: #fff;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    padding: 2em;
    box-shadow: 0px 0px 10px #afafaf;
  }

  .current_page {
    margin-top: 1em;
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 0.6em;
    align-items: center;
    span {
      background-color: #101010;
      width: 2.4em;
      padding: 0.5em 0;
      text-align: center;
      border-radius: 5px;
      color: #fff;
      cursor: pointer;
    }
    #left,
    #right {
      font-size: 2em;
      cursor: pointer;
    }
  }
`;

export const Title = styled.h1`
  font-size: 5em;
  font-weight: 500;
  letter-spacing: 3px;
  font-family: monospace;
  padding-bottom: 0.5em;
`;


