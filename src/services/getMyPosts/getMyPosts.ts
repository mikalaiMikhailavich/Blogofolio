export const getMyPosts = async (
  accessToken: string,
  limit: number,
  offset: number
) => {
  const url = `https://studapi.teachmeskills.by/blog/posts/my_posts/?limit=${limit}&offset=${offset}`;
  const params = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${accessToken}`,
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
