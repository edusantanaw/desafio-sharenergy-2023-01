import styled from "styled-components";

export const CatContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 4em 0 4em;

  .content{
    background-color: #fff;
    width: 50%;
    height: 33em;
    border-radius: 20px;
    box-shadow: 0px 0px 12px #afafaf;
    padding: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .status {
    position: relative;
    width: 100%;
    span {
      padding: 0.7em 1.2em;
      background-color: #000;
      color: #fff;
      border-radius: 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      transition: 0.4s;
      &:hover{
         opacity: 0.9;
      }
      svg{
        font-size: 1.4em;
        cursor: pointer;
      }
    }
    ul {
      background-color: #000;
      border-radius: 5px;
      position: absolute;
      margin-top: 0.5em;
      width: 100%;
      height: 26.5em;
      padding: 0.3em 0.6em;
      display: flex;
      flex-direction: column;
      gap: 0.5em;
      color: #fff;
      overflow-y: auto;
      z-index: 3;
      li {
        cursor: pointer;
        width: 100%;
        background-color: #000;
        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
  img {
    margin-top: 1em;
    width: 100%;
    height: 26em;
    object-fit: contain;
  }
`;
