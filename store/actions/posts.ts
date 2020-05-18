export const Type = {
  FETCH_POSTS: "FETCH_POSTS",
  DELETE_POST: "DELETE_POST",
};

export const fetchPosts = (
  posts: object[]
): { type: string; payload: object } => ({
  type: Type.FETCH_POSTS,
  payload: { posts },
});

export const deletePost = (
  id: number | string
): { type: string; payload: object } => ({
  type: Type.DELETE_POST,
  payload: { id },
});
