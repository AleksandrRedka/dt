import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { SystemState } from "./system/types";
import { Type } from "./actions/posts";

const initialState: SystemState = {
  posts: [],
};

const PostsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Type.FETCH_POSTS:
      return {
        posts: [...payload.posts],
      };
    case Type.DELETE_POST:
      return {
        posts: [...state.posts.filter((post) => post.id !== payload.id)],
      };
    default:
      return state;
  }
};

export const initializeStore = (preloadedState = initialState) => {
  return createStore(
    PostsReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  );
};
