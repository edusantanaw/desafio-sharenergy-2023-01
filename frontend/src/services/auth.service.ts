import { data, response } from "../protocols/auth";
import Api from "../util/Api";

const baseUrl = " http://localhost:5000/api/";
const tokenKey = "@App:token";

function makeStorage(value: any, key: any) {
  localStorage.setItem(key, value);
}

export async function authService(data: data) {
  try {
    const response = (await Api.post(baseUrl + "auth", data)) as response;
    const { accessToken } = response.data;
    if (data.remember) makeStorage(accessToken, tokenKey);
    console.log(1);
    return {
      success: true,
      data: accessToken,
    };
  } catch (error) {
    const authError = error as { response: { data: string } };
    return {
      success: false,
      data: authError.response.data,
    };
  }
}
