//import logo from "../assets/strive-logo.png";
import SearchBar from "./SearchBar.js";
import { FaCartPlus } from "react-icons/fa";
import { FaLanguage } from "react-icons/fa";
import Button from "../../SharedRecources/components/Button.js";
import styled from "styled-components";
import { keyframes } from "styled-components";
import NavMenus from "./NavMenus";

const Nav = styled.nav`
  display: flex;
  position: fixed;
  background: #fff;
  align-items: center;
  justify-content: space-between;
  z-index: 1010;
  width: 100vw;
  opacity: 1;
  height: 4.8rem;
  margin: 0px;
  padding: 0px;
  border-bottom: 0.5px solid #b5b3b3;
  box-shadow: rgb(20 20 20 /27%) 0.05rem 0.05rem 1.12rem;
`;

const Link = styled.a`
  text-decoration: none;
  color: #1c1d1f;
`;

const NavSection = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  width: 20rem;
`;
// const Logo = styled.h1`
//   font-weight: bolder;
//   font-family: Hack;
// `;

// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Logo = styled.div`
  position: relative;
  animation: ${rotate} 4s linear infinite;
  padding: 1rem 1rem;
  font-family: Fira Code Bold;
  font-weight: bold;
  font-size: 1rem;
  color: #ff6347;
`;

export default function TopNavBar(props) {
  return (
    <Nav className="sc-navigation">
      <Link href="/home">
        <Logo>&lt; Code /&gt;</Logo>
      </Link>

      <SearchBar />
      <NavMenus />

      <NavSection>
        <FaCartPlus
          style={{
            color: "tomato",
            fontSize: "2rem",
            cursor: "pointer",
          }}
        />

        <Button text="Log In" />
        <Button text="Signup for Free" />

        <FaLanguage
          style={{
            color: "#b5b3b3",
            fontSize: "2.5rem",
            cursor: "pointer",
            border: "0.5px solid #b5b3b3",
          }}
        />
      </NavSection>
    </Nav>
  );
}
