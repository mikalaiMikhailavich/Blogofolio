export const editMyPost = async (
  formData: FormData,
  accessToken: string,
  id: number
) => {
  const url = `https://studapi.teachmeskills.by/blog/posts/${id}/`;
  const params = {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
      // "Content-Type": "multipart/form-data",
    },
    body: formData,
  };
  const request = new Request(url, params);
  const response = await fetch(request);
  console.log(response);

  const result = await response.json();
  console.log(result);

  return {
    ok: response.ok,
    status: response.status,
    data: result,
  };
};
