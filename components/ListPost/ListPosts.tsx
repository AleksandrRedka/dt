import styled from "styled-components";
import Post from "../Post/Post";

//   Styles
const List = styled.ul`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
`;

const Paragraph = styled.p`
  font-family: monospace, sans-serif;
  text-align: center;
  font-size: 24px;
  line-height: 30px;
`;
//  Styles

const ListPosts = ({ posts }): JSX.Element => {
  return posts.length > 0 ? (
    <List>
      {posts.map((item) => (
        <Post key={item.id} id={item.id} title={item.title}></Post>
      ))}
    </List>
  ) : (
    <Paragraph>List is empty.</Paragraph>
  );
};

export default ListPosts;
