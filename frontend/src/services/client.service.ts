import { client } from "../types/client";
import Api from "../util/Api";
import { tokenKey } from "../util/keys";

const baseUrl = "http://localhost:5000/api/";

function getToken() {
  const token = localStorage.getItem(tokenKey);
  return token;
}

function makeHeaders() {
  const token = getToken();
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

export async function loadAllClient() {
  const options = makeHeaders();
  const response = await Api.get(baseUrl + "clients", options);
  console.log(response);
  if (response.data) return response.data as client[];
  return null;
}

export async function createClient(data: client) {
  const options = makeHeaders();
  const response = await Api.post(baseUrl + "client", data, options);
  return response.data as client;
}

export async function updateClient(data: client) {
  const options = makeHeaders();
  const response = await Api.put(baseUrl + "client", data, options);
  return response.data as client;
}

export async function deleteClient(id: string) {
  const options = makeHeaders();
  const response = await Api.delete(`${baseUrl}client/${id}`, options);
  return response.data;
}
