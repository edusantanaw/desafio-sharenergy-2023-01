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

function App() {
  const queryClient = new QueryClient();

  const { isLogged, isLoading } = useAuth();
  if (isLoading) return <>Loading</>;

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <GlobalStyle />
        <Header />
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
            path="/auth"
            element={!isLogged ? <Login /> : <Navigate to="/" />}
          />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
