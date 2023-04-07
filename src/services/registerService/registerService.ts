const registerUser = async (
  username: string,
  email: string,
  password: string
) => {
  const url = "https://studapi.teachmeskills.by/auth/users/";
  const params = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
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
export { registerUser };
