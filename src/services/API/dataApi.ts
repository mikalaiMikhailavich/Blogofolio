// const url =

export const getSearchPosts = async (
  searchValue: string,
  offset: number = 0
) => {
  const response = await fetch(
    `https://studapi.teachmeskills.by/blog/posts/?limit=10&offset=${offset}&search=${searchValue}`
  );
  const res = await response.json();
  return res.results;
};

export const getSearchPostsCount = async (value: string): Promise<number> => {
  const response = await fetch(
    `https://studapi.teachmeskills.by/blog/posts/?limit=0&offset=0&search=${value}`
  );
  const res = await response.json();
  return res.count;
};

export const getAllPosts = (limit: number, offset: number) => {
  return fetch(
    "https://studapi.teachmeskills.by/blog/posts/" +
      `?limit=${limit}&offset=${offset}`
  )
    .then((response) => response.json())
    .then((res) => res.results);

  // .then((res: IPostAPI[]) => res);
};

export const getPostsCount = async () => {
  const response = await fetch(`https://studapi.teachmeskills.by/blog/posts/`);
  const res = await response.json();
  return res.count;
};

export const getPostById = async (id: string | undefined) => {
  const response = await fetch(
    `https://studapi.teachmeskills.by/blog/posts/${id}`
  );
  const res = await response.json();
  return res;
};
