import {
  createContext,
  ReactNode,
  useContext,
  useLayoutEffect,
  useState,
} from "react";
import { data } from "../../protocols/auth";
import { authService } from "../../services/auth.service";

interface AuthContextData {
  auth: (data: data) => Promise<{ success: boolean; data: string }>;
  signout: () => void;
  tokenAuth: string | null;
  isLogged: boolean;
}
const AuthContext = createContext({} as AuthContextData);

export interface providerProp {
  children: ReactNode;
}

export const AuthProvider = ({ children }: providerProp) => {
  const [tokenAuth, setToken] = useState<string | null>(null);
  const [isLogged, setIsLogged] = useState<boolean>(false);

  useLayoutEffect(() => {
    const tokenStorage = localStorage.getItem("@App:token");

    if (tokenStorage) {
      setToken(tokenStorage);
      setIsLogged(true);
    }
  }, [isLogged]);

  const resetStates = () => {
    setToken(null);
    setIsLogged(false);
  };

  async function auth(data: data) {
    const response = await authService(data);
    setToken(response.data);
    setIsLogged(true);
    return response;
  }

  function signout() {
    localStorage.removeItem("@App:token");
    resetStates();
  }

  return (
    <AuthContext.Provider value={{ auth, tokenAuth, isLogged, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
