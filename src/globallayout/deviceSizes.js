import styled from "styled-components";
/*The sizes object holds the sizes
of different screens*/
const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

/*Media query for each device */

const devices = {
  mobileS: `(min-width:${sizes.mobileS})`,
  mobileM: `(min-width:${sizes.mobileM})`,
  mobileL: `(min-width:${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

export const StyledApp = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Segoe UI", Arial, sans-serif;
  background-color: #efefef;
  height: 100vh;
  width: 100vw;

  @media ${devices.laptop} {
    max-width: 800px;
  }

  @media ${devices.desktop} {
    max-width: 1400px;
  }

`;
