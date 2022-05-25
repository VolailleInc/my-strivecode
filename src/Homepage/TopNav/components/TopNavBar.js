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
  background-color: #efefef;
  align-items: center;
  justify-content: space-between;
  z-index: 1010;
  width: 100vw;
  opacity: 1;
  height: 4.3rem;
  margin: 0;
  padding: 0;
  border-bottom: 0.5px solid #b5b3b3;
  box-shadow: 0 2px 6px rgba(54 65 255/15%), 0 4px 10px rgba(54 65 255/ 15%);
`;

const Link = styled.a`
  text-decoration: none;
  color: #1c1d1f;
`;

const NavSection = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  margin: 0 1rem 0 1rem;
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
  animation: ${rotate} 2s linear infinite;
  padding: 1rem 1rem;
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
