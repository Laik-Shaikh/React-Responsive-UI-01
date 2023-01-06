import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./components/styles/GlobalStyles";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import OverView from "./components/OverView";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Review from "./components/Review";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Footer from "./components/Footer";


const theme = {
  colors: {
    body: "#FFFAFF",
  },

  media: {
    mobile: "780px",
  },
};

function App() {
  return (
    <>
    
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyles />
          <Header />
          <HeroSection />
          <OverView />
          <Section1 />
          <Section2 />
          <Review />
          <Section3 />
          <Section4 />
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
