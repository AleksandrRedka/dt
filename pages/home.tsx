import Head from "next/head";
import ListPosts from "../components/ListPost/ListPosts";
import { useSelector } from "react-redux";
import { getPosts } from "../store/selectors/postSelectors";
import Layout from "../Layout/Layout";

const Home = () => {
  const posts = useSelector((state) => getPosts(state));
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <ListPosts posts={posts}></ListPosts>
    </Layout>
  );
};

export default Home;
