import { apiResponse, users } from "../types/randomUser";
import Api from "../util/Api";

const baseUrl = "https://randomuser.me/api/?results=20&'";
const searchQuery = "https://randomuser.me/api/?results=500";

export async function loadUser(page: number) {
  const response = (await Api.get(baseUrl + page)) as apiResponse;
  return response.data.results;
}

export async function searchUser(search: string, types: string[]) {
  const response = (await Api.get(searchQuery)) as apiResponse;
  const filteredData = filterData(response, search, types);
  return filteredData;
}

export function filterData(
  response: apiResponse,
  target: string,
  types: string[]
) {
  const data = response.data.results;
  const currentFilters: users[] = [];
  for (let index in types) {
    const typeAction = filters[types[index]];
    currentFilters.push(...typeAction(data, target, currentFilters));
  }
  return currentFilters;
}

const filters: any = {
  name: (users: users[], target: string, current: users[]) => {
    const data = users.filter(
      (user) =>
        user.name.first.toLowerCase().startsWith(target) &&
        !current.includes(user)
    );
    return data;
  },
  email: (users: users[], target: string, current: users[]) => {
    const data = users.filter(
      (user) =>
        user.email.toLowerCase().startsWith(target) && !current.includes(user)
    );
    return data;
  },
  username: (users: users[], target: string, current: users[]) => {
    const data = users.filter(
      (user) =>
        user.login.username.toLowerCase().startsWith(target) &&
        !current.includes(user)
    );
    return data;
  },
};
