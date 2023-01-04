import { useAuth } from "./context/auth/authContext";
import Login from "./pages/auth/Login";
import Home from "./pages/home/Home";
import { GlobalStyle } from "./styles/Global";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/query-core";
import Cat from "./pages/cats/Cat";
import Header from "./layout/Header";
import Crud from "./pages/crud/Crud";
import { Loading } from "./components/Loading";

function App() {
  const queryClient = new QueryClient();

  const { isLogged, isLoading } = useAuth();
  if (isLoading) return <Loading />
console.log(isLogged)
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <GlobalStyle />
        {isLogged && <Header />}
        <Routes>
          <Route
            path="/"
            element={isLogged ? <Home /> : <Navigate to="/auth" />}
          />
          <Route
            path="/cat"
            element={isLogged ? <Cat /> : <Navigate to="/auth" />}
          />
          <Route
            path="/crud"
            element={isLogged ? <Crud /> : <Navigate to="/auth" />}
          />
          <Route
            path="/auth"
            element={!isLogged ? <Login /> : <Navigate to="/" />}
          />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
