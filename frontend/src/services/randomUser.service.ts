import { apiResponse } from "../types/randomUser";
import Api from "../util/Api";
import { filterData } from "../util/filterData";

const baseUrl = "https://randomuser.me/api/?results=10&'";
const searchQuery = "https://randomuser.me/api/?results=500";

export async function loadUser(page: number) {
  const response = (await Api.get(baseUrl + page)) as apiResponse;
  return response.data.results;
}

export async function searchUser(search: string, types: string[]) {
  const response = (await Api.get(searchQuery)) as apiResponse;
  if(search.length === 0) return null
  const filteredData = await filterData(response, search, types);
  return filteredData;
}
