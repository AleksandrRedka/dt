import React, { useState } from "react";
import styled from "styled-components";
import { toastShow } from "../../helper/helper";
import { CreateNewPostAPI } from "../../api/api";

//Styles
const Form = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: 50px auto 0;
`;
const Input = styled.input`
  margin-bottom: 30px;
  font-size: 24px;
  line-height: 24px;
  border: none;
  border-bottom: 1px solid #000;
  text-align: center;
  outline: blue;
  padding: 5px;
  border-radius: 10px;
`;
const TextArea = styled.textarea`
  height: 20px;
  text-align: center;
  margin-bottom: 40px;
  font-size: 20px;
  line-height: 20px;
  border: none;
  border-bottom: 1px solid #000;
  outline: blue;
  padding: 5px;
  border-radius: 10px;
`;
const Button = styled.button`
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

// =======

const FormCreatePost = (): JSX.Element => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const createNewPost = (e: MouseEvent): void => {
    e.preventDefault();

    if (title !== "" && body !== "") {
      const res = CreateNewPostAPI({
        title: title,
        body,
      })
        .then((data) => {
          if (data.status === 201) {
            toastShow("Good! New Post Created!", "success");
            setTitle("");
            setBody("");
          }
        })
        .catch((err) => toastShow("Please, try later.", "error"));
    } else {
      toastShow("Please, fill in all fields", "error");
    }
  };
  return (
    <Form>
      <Input
        placeholder="Title Post"
        type="text"
        value={title}
        name="title"
        maxLength={30}
        onChange={(e: { target: HTMLInputElement }): void =>
          setTitle(e.target.value)
        }
      />
      <TextArea
        placeholder="Description Post"
        value={body}
        name="body"
        maxLength={200}
        onChange={(e: { target: HTMLInputElement }): void =>
          setBody(e.target.value)
        }
      ></TextArea>
      <Button type="click" onClick={createNewPost}>
        Create Post
      </Button>
    </Form>
  );
};

export default FormCreatePost;
