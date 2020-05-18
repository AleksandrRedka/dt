import Home from "./home";
import { withRedux } from "../lib/redux";
import { useEffect } from "react";
import { getAllPostsAPI } from "../api/api";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../store/actions/posts";

const IndexPage = (): JSX.Element => {
  const dispatch = useDispatch();
  useEffect(() => {
    getAllPostsAPI().then((data: object[]) => {
      dispatch(fetchPosts(data));
    });
  }, []);
  return <Home></Home>;
};

export default withRedux(IndexPage);
