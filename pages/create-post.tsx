import React from "react";
import Head from "next/head";
import FormCreatePost from "../components/FormCreatePost/FormCreatePost";
import Layout from "../Layout/Layout";

const CreatePost = () => {
  return (
    <>
      <Head>
        <title>Create Post</title>
      </Head>
      <Layout>
        <FormCreatePost></FormCreatePost>
      </Layout>
    </>
  );
};

export default CreatePost;
