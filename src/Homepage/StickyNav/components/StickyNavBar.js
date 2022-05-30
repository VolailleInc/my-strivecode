import styled from "styled-components";
import StickyNavMenu from "./StickyNavMenu";

const Nav = styled.nav`
  display: flex;
  position: sticky;
  flex-direction: row;
  background-color: #e2e2e3;
  align-items: center;
  justify-items: center;
  justify-content: space-around;
  z-index: 1010;
  width: 100vw;
  opacity: 1;
  height: 5rem;
  margin: 0;
  padding: 0;
  border-bottom: 0.5px solid #b5b3b3;
  box-shadow: rgb(20 20 20 /15%) 0.05rem 0.05rem 1rem;
`;

const H = styled.h1`
  padding: 0.2rem;
  font-style: italic;
`;

export default function StickyNavBar() {
  return (
    <Nav>
      <H>Pick a course and grow your skills!</H>
      <StickyNavMenu />
    </Nav>
  );
}
