import { Link } from "react-router-dom";
import { HeaderContainer } from "./header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Logo</h1>
      <ul>
        <li>
          <Link to="/">Principal</Link>
        </li>
        <li>
          <Link to="/cat">Pagina 2</Link>
        </li>
        <li>
          <Link to="/crud">Pagina 3</Link>
        </li>
      </ul>
    </HeaderContainer>
  );
};

export default Header;
