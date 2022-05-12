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

  /* ----------- iPhone 4 and 4S ----------- */

  /* Portrait and Landscape */
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
  }

  /* ----------- iPhone 5, 5S, 5C and 5SE ----------- */

  /* Portrait and Landscape */
  @media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) {
  }
  /* ----------- iPhone 6, 6S, 7 and 8 ----------- */

  /* Portrait and Landscape */
  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
  }
  /* ----------- iPhone 6+, 7+ and 8+ ----------- */

  /* Portrait and Landscape */
  @media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {
  }
  /* ----------- iPhone X ----------- */

  /* Portrait and Landscape */
  @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
  }

  /* ----------- Galaxy S3 ----------- */

  /* Portrait and Landscape */
  @media screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 2) {
  }
  /* ----------- Galaxy S4, S5 and Note 3 ----------- */

  /* Portrait and Landscape */
  @media screen and (device-width: 320px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 3) {
  }

  /* ----------- Galaxy S6 ----------- */

  /* Portrait and Landscape */
  @media screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 4) {
  }

  /* ----------- HTC One ----------- */

  /* Portrait and Landscape */
  @media screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 3) {
  }

  /* ----------- Google Pixel ----------- */

  /* Portrait and Landscape */
  @media screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 3) {
  }

  /* ----------- Google Pixel XL ----------- */

  /* Portrait and Landscape */
  @media screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 4) {
  }

  /* ----------- Nexus 4 ----------- */

  /* Portrait and Landscape */
  @media screen and (device-width: 384px) and (device-height: 592px) and (-webkit-device-pixel-ratio: 2) {
  }

  /* ----------- Nexus 5 ----------- */

  /* Portrait and Landscape */
  @media screen and (device-width: 360px) and (device-height: 592px) and (-webkit-device-pixel-ratio: 3) {
  }

  /* ----------- Nexus 6 and 6P ----------- */

  /* Portrait and Landscape */
  @media screen and (device-width: 360px) and (device-height: 592px) and (-webkit-device-pixel-ratio: 4) {
  }

  /* ----------- Windows Phone ----------- */

  /* Portrait and Landscape */
  @media screen and (device-width: 480px) and (device-height: 800px) {
  }

  //Laptops
  /* ----------- Non-Retina Screens ----------- */
  @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
  }

  /* ----------- Retina Screens ----------- */
  @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
  }

  /* ----------- iPad 1, 2, Mini and Air ----------- */

  /* Portrait and Landscape */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
  }

  /* ----------- iPad 3, 4 and Pro 9.7" ----------- */

  /* Portrait and Landscape */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) {
  }

  /* ----------- iPad Pro 10.5" ----------- */

  /* Portrait and Landscape */
  @media only screen and (min-device-width: 834px) and (max-device-width: 1112px) and (-webkit-min-device-pixel-ratio: 2) {
  }

  /* ----------- iPad Pro 12.9" ----------- */

  /* Portrait and Landscape */
  @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
  }

  /* ----------- Galaxy Tab 2 ----------- */

  /* Portrait and Landscape */
  @media (min-device-width: 800px) and (max-device-width: 1280px) {
  }

  /* ----------- Galaxy Tab S ----------- */

  /* Portrait and Landscape */
  @media (min-device-width: 800px) and (max-device-width: 1280px) and (-webkit-min-device-pixel-ratio: 2) {
  }

  /* ----------- Nexus 7 ----------- */

  /* Portrait and Landscape */
  @media screen and (device-width: 601px) and (device-height: 906px) and (-webkit-min-device-pixel-ratio: 1.331) and (-webkit-max-device-pixel-ratio: 1.332) {
  }

  /* ----------- Nexus 9 ----------- */

  /* Portrait and Landscape */
  @media screen and (device-width: 1536px) and (device-height: 2048px) and (-webkit-min-device-pixel-ratio: 1.331) and (-webkit-max-device-pixel-ratio: 1.332) {
  }

  /* ----------- Kindle Fire HD 7" ----------- */

  /* Portrait and Landscape */
  @media only screen and (min-device-width: 800px) and (max-device-width: 1280px) and (-webkit-min-device-pixel-ratio: 1.5) {
  }

  /* ----------- Kindle Fire HD 8.9" ----------- */

  /* Portrait and Landscape */
  @media only screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1.5) {
  }

  /* ----------- Moto 360 Watch (Wearbles)----------- */
  @media (max-device-width: 218px) and (max-device-height: 281px) {
  }
`;
