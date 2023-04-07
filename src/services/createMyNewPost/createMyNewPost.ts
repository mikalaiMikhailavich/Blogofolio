export const createMyNewPost = async (
  formData: FormData,
  accessToken: string
) => {
  const url = "https://studapi.teachmeskills.by/blog/posts/";
  const params = {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: formData,
  };
  const request = new Request(url, params);
  const response = await fetch(request);
  const result = await response.json();
  console.log(result);

  return {
    ok: response.ok,
    status: response.status,
    data: result,
  };
};
