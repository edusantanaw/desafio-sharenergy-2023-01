import UserList from "../../components/UserList";
import { usePaginate } from "../../hooks/usePaginate";
import { loadUser, users } from "../../services/randomUser.service";
import { HomeContainer } from "./home.styles";

const Home = () => {
  const { atualPage, data, next, prev } = usePaginate(loadUser, "users");
  return (
    <HomeContainer>
      <h1>Users</h1>
      <button onClick={next}>Next</button>
      <button onClick={prev}>Previous</button>
      <span>{atualPage}</span>
      {data && <UserList list={data} />}
      {Array(10)
        .fill(" ")
        .map((n) => (
          <span>
            {n}a{console.log(n)}
          </span>
        ))}
    </HomeContainer>
  );
};

export default Home;
