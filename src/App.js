import styled from "styled-components";
import FlexCard from "./Homepage/SharedRecources/components/FlexCard";
import TopNavBar from "./Homepage/TopNav/components/TopNavBar.js";
import "./App.css";
import StickyNav from "./Homepage/StickyNav/components/StickyNavBar";
import { deviceSize } from "./globallayout/deviceSizes.js";


export default function App() {
  return (
    <div className="App">
      <TopNavBar />
      <FlexCard />
      <StickyNav />
    </div>
  );
}
