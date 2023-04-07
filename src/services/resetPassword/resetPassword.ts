export const fetchResetPassword = async (email: string) => {
  const url = "https://studapi.teachmeskills.by/auth/users/reset_password/";
  const params = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      email: email,
    }),
  };
  const request = new Request(url, params);

  fetch(request);
};

export const fetchNewPassword = async (
  uid: string,
  token: string,
  password: string
) => {
  const url =
    "https://studapi.teachmeskills.by/auth/users/reset_password_confirm/";
  const params = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      uid,
      token,
      new_password: password,
    }),
  };
  const request = new Request(url, params);
  const response = await fetch(request);
  return {
    ok: response.ok,
    status: response.status,
  };
};
