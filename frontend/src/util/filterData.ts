import { users } from "../types/randomUser";

export async function filterData(
  data: users[],
  target: string,
  types: string[]
) {
  const filteredData = await getData(types, data, target);
  return filteredData;
}

async function getData(types: string[], data: users[], target: string) {
  const currentFilters: users[] = [];
  for (let index in types) {
    const typeFilter = typeFilters[types[index]];
    const filteredData = filter(
      typeFilter,
      data,
      target,
      currentFilters
    );
    currentFilters.push(...filteredData);
  }
  return currentFilters;
}

type filters = {
  [index: string]: (user: users) => string;
};

const typeFilters: filters = {
  name: (user: users) => user.name.first.toLowerCase(),
  email: (user: users) => user.email.toLowerCase(),
  username: (user: users) => user.login.username.toLowerCase(),
};

const filter = (
  method: (user: users) => string,
  users: users[],
  target: string,
  current: users[]
) => {
  const dataFiltered = users.filter(
    (user) =>
      method(user).startsWith(target) &&
      !current.includes(user)
  );
  return dataFiltered;
};
