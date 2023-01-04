import { client, data } from "../types/client";
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

export async function createClient(data: data) {
  try {
    const options = makeHeaders();
    await Api.post(baseUrl + "client", data, options);
    return { success: true, data: "" };
  } catch (error) {
    const data = error as { response: { data: string } };
    return { success: false, data: data.response.data };
  }
}

export async function updateClient({ data, id }: { data: data; id: string }) {
  try {
    const options = makeHeaders();
    await Api.put(baseUrl + `client/${id}`, data, options);
    return { success: true, data: "" };
  } catch (error) {
    console.log(error)
    const data = error as { response: { data: string } };
    return { success: false, data: data.response.data };
  }
}

export async function deleteClient(id: string) {
  const options = makeHeaders();
  const response = await Api.delete(`${baseUrl}client/${id}`, options);
  return response.data;
}

export async function loadById(id: string) {
  const options = makeHeaders();
  const response = await Api.get(`${baseUrl}/client/${id}`, options);
  return response.data;
}
