import React from "react";
import { Link } from "react-router-dom";
import { HeaderContainer } from "./header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Header</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cat">Cat</Link>
        </li>
        <li>
          <Link to="/crud">Crud</Link>
        </li>
      </ul>
    </HeaderContainer>
  );
};

export default Header;
