import styled from "styled-components";

export const CatContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .status {
    position: relative;
    span {
      padding: 0.5em 1em;
      width: 30em;
      background-color: red;
      border-radius: 5px;
      display: flex;
    }
    ul {
      background-color: blue;
      border-radius: 5px;
      position: absolute;
      margin-top: 0.5em;
      width: 100%;
      height: 20em;
      padding: 0.3em 0.6em;
      display: flex;
      flex-direction: column;
      gap: 0.5em;
      color: #fff;
      overflow-y: auto;

      li {
        cursor: pointer;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
  img {
    margin-top: 2em;
    width: 30em;
  }
`;
