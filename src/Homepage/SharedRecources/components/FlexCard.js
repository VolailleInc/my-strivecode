import styled from "styled-components";
import BackCover from "../../Body/components/BackCover.js";
import HomeIntro from "../../Body/components/HomeIntro.js";

export const Content = styled.section`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  margin: 4rem;
  margin-top: 7rem;
  z-index: 1;
  width: inherit;
`;

export default function FlexCard() {
  return (
    <div>
      <Content>
        <HomeIntro />
        <BackCover />
      </Content>
    </div>
  );
}
