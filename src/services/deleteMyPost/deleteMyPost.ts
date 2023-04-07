export const deleteMyPost = async (accessToken: string, id: number) => {
  const url = `https://studapi.teachmeskills.by/blog/posts/${id}/`;
  const params = {
    method: "DELETE",
    headers: {
      // Accept: "*/*",
      Authorization: `Bearer ${accessToken}`,
    },
  };
  const request = new Request(url, params);
  const response = await fetch(request);

  return {
    ok: response.ok,
    status: response.status,
  };
};
