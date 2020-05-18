import Link from "next/link";
import styled from "styled-components";

const Card = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TitlePost = styled.h2`
  width: 100%;
  text-align: center;
  margin-bottom: 40px;
  font-size: 30px;
  &::first-letter {
    font-size: 36px;
  }
`;

const GoBack = styled.button`
  font-size: 24px;
  line-height: 30px;
  border-radius: 10px;
  background-color: #a9f7a9;
  margin: auto;
  width: 200px;
  padding: 10px;
  text-align: center;
  border: none;
  outline: none;
  cursor: pointer;
`;
const Description = styled.p`
  width: 60%;
  font-size: 24px;
  text-align: center;
  margin: auto;
  margin-bottom: 40px;
`;

const PostDesc = ({ post }): JSX.Element => {
  return (
    <Card>
      <TitlePost>{post.title}</TitlePost>
      <Description>{post.body}</Description>
      <Link href="/" as="/home">
        <GoBack>Go to Home</GoBack>
      </Link>
    </Card>
  );
};

export default PostDesc;
