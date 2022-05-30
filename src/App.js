//import styled from "styled-components";
import FlexCard from "./Homepage/SharedRecources/components/FlexCard";
import TopNavBar from "./Homepage/TopNav/components/TopNavBar.js";
import "./App.css";
import StickyNav from "./Homepage/StickyNav/components/StickyNavBar";
import Footer from "./Homepage/Footer/components/Footer";
//import { StyledApp } from "./globallayout/deviceSizes.js";

export default function App() {
  return (
    <div className="App">
      <TopNavBar />
      <FlexCard />
      <StickyNav />
      <Footer />
    </div>
  );
}
