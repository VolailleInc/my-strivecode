import styled from "styled-components";
import background from "../assets/striveBack.png";

const Image = styled.img`
  position: relative;
  width: 75%;
  max-width: 100%;
  height: 50%;
  z-index: 1;
  margin-right: 0;
`;

function BackCover() {
  return (
    <div>
      <Image src={background} alt="home page background cover picture" />
    </div>
  );
}

export default BackCover;
