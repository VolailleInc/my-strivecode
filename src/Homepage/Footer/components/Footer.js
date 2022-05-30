import React from "react";
import styled from "styled-components";

const FootSection = styled.section`
  //display: flex;
  width: 100vw;
  //background: #574f4a;
  background: #b5b3b3;
  height: 50rem;
  color: #000;
`;

const CourseList = () => {
  return (
    <div>
      <h3>Free beginer courses</h3>
      <ul>
        <li>HTML and CSS</li>
        <li>Python for Beginers</li>
        <li>Javascript for Beginers</li>
        <li>React for begginers</li>
        <li>Node for begginers</li>
        <li>Django for begginers</li>
        <li>Flask for begginers</li>
      </ul>
    </div>
  );
};

export default function Footer() {
  return (
    <FootSection>
      <CourseList />
    </FootSection>
  );
}
