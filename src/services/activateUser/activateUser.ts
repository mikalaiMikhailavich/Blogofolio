const activateUser = async (
  uid: string,
  token: string
): Promise<{ ok: boolean; status: number; data: null | any }> => {
  const url = "https://studapi.teachmeskills.by/auth/users/activation/";
  const params = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      uid,
      token,
    }),
  };
  const request = new Request(url, params);

  const response = await fetch(request);
  const result = await (response.ok ? Promise.resolve(null) : response.json());
  console.log(result, response.ok, response.status);

  return {
    ok: response.ok,
    status: response.status,
    data: result,
  };
};
export { activateUser };
