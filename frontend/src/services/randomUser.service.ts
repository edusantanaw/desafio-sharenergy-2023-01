import { apiResponse, users } from "../types/randomUser";
import Api from "../util/Api";
import { filterData } from "../util/filterData";

const baseUrl = "https://randomuser.me/api/?results=10&'";
const searchQuery = "https://randomuser.me/api/?results=600";

export async function loadUser(page: number) {
  const response = (await Api.get(baseUrl + page)) as apiResponse;
  return response.data.results;
}

const cache = makeCache("users");
export async function searchUser(search: string, types: string[]) {
  const data = await cache();
  if (search.length === 0) return null;
  const filteredData = await filterData(data, search, types);
  return filteredData;
}

interface cache {
  [index: string]: users[];
}

function makeCache(key: string) {
  const cache: cache = {};
  
  return async () => {
    console.time()
    if (cache[key]) {
      console.timeEnd()
      return cache[key];
    }
    const data = (await Api.get(searchQuery)) as apiResponse;
    cache[key] = data.data.results;
    console.timeEnd()
    return cache[key];
  };
}
