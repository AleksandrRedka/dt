import React from "react";
import { useRouter } from "next/router";
import Layout from "../../Layout/Layout";
import PostDesc from "../../components/PostDesc/PostDesc";
import { useSelector } from "react-redux";
import { getPosts } from "../../store/selectors/postSelectors";

const PostPage = () => {
  const router = useRouter();
  const posts = useSelector((state) => getPosts(state));
  const targetPost = posts.filter((post) => post.id === +router.query.id);
  return (
    <Layout>
      <PostDesc post={targetPost[0]}></PostDesc>
    </Layout>
  );
};

export default PostPage;
