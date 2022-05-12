import React from "react";
import styled from "styled-components";

const Contain = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-around;
  //z-index: 1010;
  width: 100vw;
  margin: 0;
  padding: 0;
  height: auto;
`;

export default function Container() {
  return <Contain></Contain>;
}
