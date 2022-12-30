import { ReactNode } from "react";

export type data = {
  username: string;
  password: string;
  remember: boolean;
};

export type response = {
  data: {
    accessToken: string;
    user: string;
  };
};

export interface AuthContextData {
  auth: (data: data) => Promise<{ success: boolean; data: string }>;
  signout: () => void;
  tokenAuth: string | null;
  isLogged: boolean;
  isLoading: boolean;
}

export interface providerProp {
  children: ReactNode;
}
