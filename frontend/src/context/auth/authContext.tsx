import { createContext, useContext, useLayoutEffect, useState } from "react";
import { AuthContextData, data, providerProp } from "../../types/auth";
import { authService } from "../../services/auth.service";

const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: providerProp) => {
  const [tokenAuth, setToken] = useState<string | null>(null);
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [isLoading, setLoading] = useState(true);

  useLayoutEffect(() => {
    const tokenStorage = localStorage.getItem("@App:token");

    if (tokenStorage) {
      setIsLogged(true);
    }
    setLoading(false);
  }, [isLogged]);

  const resetStates = () => {
    setToken(null);
    setIsLogged(false);
  };

  async function auth(data: data) {
    const response = await authService(data);
    setToken(response.data);
    setIsLogged(true);
    setIsLogged(false);
    return response;
  }

  function signout(): void {
    localStorage.removeItem("@App:token");
    resetStates();
  }

  return (
    <AuthContext.Provider
      value={{ auth, isLoading, tokenAuth, isLogged, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
