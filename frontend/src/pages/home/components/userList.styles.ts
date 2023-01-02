import styled from "styled-components";

export const List = styled.ul`
  width: 100%;
  flex-wrap: wrap;
  margin-top: 1em;
  display: flex;
  gap: 2em;
`;

export const Item = styled.li`
  width: 48%;
  padding: 1em;
  border-radius: 15px;
  display: flex;
  gap: 1.3em;
  background-color: #fff;
  border: 1px solid #8f8f8f;
  overflow: hidden;
  img {
    width: 7em;
    height: 7em;
    border-radius: 50%;
    object-fit: cover;
  }
  span{
    margin-left: 0.2em;
  }
  .infos {
    display: flex;
    flex-direction: column;
  }
  .nickname{
    gap: 1em;
    align-items: center;
    span{
      display: flex;
      gap:0.4em;
      p{
        font-weight: 500;
      }
    }
    #age{
      font-weight: 500;
    }
}
`;
