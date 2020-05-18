import Link from "next/link";
import styled from "styled-components";
import { DeletePostAPI } from "../../api/api";
import { toastShow } from "../../helper/helper";
import { useDispatch } from "react-redux";
import { deletePost } from "../../store/actions/posts";

const Li = styled.li`
  position: relative;
`;
const Delete = styled.span`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  right: 5%;
  color: red;
  z-index: 2;
  transition: 450ms;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    transform: translate(-50%, -50%) scale(1.3);
  }
`;
const Post = ({ id, title }): JSX.Element => {
  const dispstch = useDispatch();

  const deletePostNow = (id: number | string): void => {
    console.log("Post deleting");
    DeletePostAPI(id)
      .then((data) => {
        if (data.status === 200) {
          dispstch(deletePost(+id));
          toastShow("Post deleted!", "success");
        }
      })
      .catch(() => toastShow("Sorry you post not deleted", "error"));
  };

  return (
    <Li>
      <Link href={`/post/[id]`} as={`/post/${id}`}>
        <a>{title}</a>
      </Link>
      <Delete
        className="material-icons"
        onClick={() => {
          console.log(id);
          deletePostNow(+id);
        }}
      >
        delete_outline
      </Delete>
    </Li>
  );
};

export default Post;
