import axios from "axios";

const BASE_API: string = "https://simple-blog-api.crew.red/posts";

// get all post
export async function getAllPostsAPI<T>(): Promise<T> {
  const response = await axios(`${BASE_API}`);
  const posts = await response.data;
  return posts;
}
//create new post

export async function CreateNewPostAPI<T>(newPost: object): Promise<any> {
  const response = await axios.post(`${BASE_API}`, newPost);
  return await response;
}

// delete post

export async function DeletePostAPI<T>(id: number | string): Promise<any> {
  const response = await axios.delete(`${BASE_API}/${id}`);
  return response;
}
