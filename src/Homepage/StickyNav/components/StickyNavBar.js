import styled from "styled-components";
import StickyNavMenu from "./StickyNavMenu";

const Nav = styled.nav`
  display: flex;
  position: sticky;
  flex-direction: column;
  background-color: #e2e2e3;
  align-items: center;
  z-index: 1010;
  width: 100vw;
  opacity: 1;
  height: 7rem;
  margin: 0;
  padding: 0;
  border-bottom: 0.5px solid #b5b3b3;
  box-shadow: 0 2px 6px rgba(54 65 255/15%), 0 4px 10px rgba(54 65 255/ 15%);
`;

const H = styled.h1`
  padding: 0.1rem;
`;

export default function StickyNavBar() {
  return (
    <Nav>
      <H>Pick a course and grow your skills</H>
      <StickyNavMenu />
    </Nav>
  );
}
