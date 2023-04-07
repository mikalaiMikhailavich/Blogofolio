import { TokenDto } from "../../reduxTools/reducers/authReducer/types";
import { IObjectStringList } from "../types/types";

const getTokensUser = async (
  email: string,
  password: string
): Promise<{
  ok: boolean;
  status: number;
  data: TokenDto | IObjectStringList;
}> => {
  const url = "https://studapi.teachmeskills.by/auth/jwt/create/";
  const params = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      password,
      email,
    }),
  };

  const request = new Request(url, params);
  const response = await fetch(request);
  const result = await response.json();
  return {
    ok: response.ok,
    status: response.status,
    data: result,
  };
};

const fetchRefreshToken = async (refreshToken: string) => {
  const url = "https://studapi.teachmeskills.by/auth/jwt/refresh/";
  const params = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      refresh: refreshToken,
    }),
  };
  const request = new Request(url, params);

  const response = await fetch(request);
  const result = await response.json();

  return {
    ok: response.ok,
    status: response.status,
    data: result,
  };
};

const getUserData = async (accsessToken: string) => {
  const url = "https://studapi.teachmeskills.by/auth/users/me/";
  const params = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${accsessToken}`,
    },
  };
  const request = new Request(url, params);
  const response = await fetch(request);
  const result = await response.json();
  return {
    ok: response.ok,
    status: response.status,
    data: result,
  };
};

export { getTokensUser, getUserData, fetchRefreshToken };
