import styled from "styled-components";

export const List = styled.ul`
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  gap: 1.4em;
`;

export const Item = styled.li`
  width: 32%;
  padding: 1em;
  border-radius: 10px;
  display: flex;
  gap: 1em;
  color: #fff;
  background-color: #000;
  img {
    width: 25%;
    border-radius: 5px;
  }
  .infos {
    display: flex;
    flex-direction: column;
  }
`;
