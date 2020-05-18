import Link from "next/link";
import styled from "styled-components";

const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: rgb(100, 175, 255);
  width: 100%;
  margin-bottom: 30px;
  padding: 20px;
`;

const NavLink = styled.a`
  text-align: center;
  width: 20%;
  color: #000;
  font-size: 27px;
  line-height: 35px;
  margin: 0 15px;
  font-family: monospace, sans-serif;
  transition: 450ms;
  &:hover {
    color: white;
  }
`;

const Nav = () => {
  return (
    <Navigation>
      <Link href="/" as="/home">
        <NavLink>Home</NavLink>
      </Link>
      <Link href="/create-post">
        <NavLink>Create My Post</NavLink>
      </Link>
    </Navigation>
  );
};

export default Nav;
