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
