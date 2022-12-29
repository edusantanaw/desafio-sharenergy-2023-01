import Api from "../util/Api";

type apiResponse = {
  data: {
    results: users[];
  };
};
export type users = {
  name: {
    first: string;
    last: string;
  };
  email: string;
  login: {
    username: string;
  };
  picture: {
    medium: string;
  };
  registered: {
    age: number;
  };
};

const baseUrl = "https://randomuser.me/api/?results=20";
export async function loadUser(page: number) {
  const response = (await Api.get(baseUrl + `&${page}`)) as apiResponse;
  return response.data.results;
}
