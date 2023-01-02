import styled from "styled-components";

export const SearchContainer = styled.div`
display: flex;
gap: 1em;
  #actual {
    opacity: 0.9;
  }
  .search {
    display: flex;
    gap: 1em;
  }
  .filter{
    position: relative;
  }

  .filters{
    display: flex;
    flex-direction:column;
    margin-top: 0.4em;
    position: absolute;
    right: 0;
    span{
      cursor: pointer;
      &:hover{
        opacity: 0.8;
      }
    }
  }
  .filters, .current_filter {
    background-color: #333;
    color: #fff;
    padding: 0.6em 1em;
    border-radius: 5px;
}

  .current_filter{
    display: flex;
    align-items: center;
    gap: 1em;
    cursor: pointer;
  }

`
export const Input = styled.input`
  width: 35em;
  height: 3.5em;
  border-radius: 5px;
  margin-bottom: 2em;
  border: none;
  background-color: #dfdfdf;
  padding: 1em;
  &:focus {
    outline: none;
  }
`;