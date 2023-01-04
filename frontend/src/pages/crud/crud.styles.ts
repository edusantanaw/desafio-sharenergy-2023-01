import styled from "styled-components";

export const CrudContainer =styled.section`
    width: 100%;
    height  : 100vh;
    padding: 7em;
    .content{
        padding-top: 2em;
        display: flex;
        gap: 2em;
    }
    .header{
        display: flex;
        justify-content: space-between;
        padding: 0 5em 0 5em;
        h2{
            color: #fff;
            font-size: 2.4em;
            font-weight:500;
        }
    }
`

export const Button = styled.button`
    width: 15em;
    height: 3.8em;
    border: none;
    border-radius: 5px;
    background-color: #EF233C;
    color: #fff;
    transition: 0.2s;
    cursor: pointer;
    &:hover {
        opacity: 0.9;
    }
`