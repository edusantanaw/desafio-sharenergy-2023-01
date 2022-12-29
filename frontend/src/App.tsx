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

function App() {
  const queryClient = new QueryClient();

  const { isLogged } = useAuth();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route
            path="/"
            element={isLogged ? <Home /> : <Navigate to="/auth" />}
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
