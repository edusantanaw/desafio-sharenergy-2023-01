import { useRef, useState } from "react";
import { usePaginate } from "../../hooks/usePaginate";
import { loadUser, searchUser } from "../../services/randomUser.service";
import { users } from "../../types/randomUser";
import UserList from "./components/UserList";
import { HomeContainer } from "./home.styles";

const Home = () => {
  const { atualPage, isLoading, data, next, prev } = usePaginate(
    loadUser,
    "users"
  );
  const [searchResults, setSearchResults] = useState<users[] | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  async function handleSearch() {
    if (inputRef.current) {
      const target = inputRef.current.value;
      const types = ["name", "email"];
      const data = await searchUser(target.toLowerCase(), types);
      setSearchResults(data);
    }
  }

  if (isLoading) return <>loading</>;
  return (
    <HomeContainer>
      <h1>Users</h1>
      <input type="text" ref={inputRef} />
      <button onClick={async () => await handleSearch()}>onClick</button>
      <button onClick={next}>Next</button>
      <button onClick={prev}>Previous</button>
      <span>{atualPage}</span>
      {data && <UserList list={!searchResults ? data : searchResults} />}
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
