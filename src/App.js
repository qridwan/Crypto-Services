import { connect } from "react-redux";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import TradingSteps from "./components/TradingSteps/TradingSteps";
import AboutBitfex from "./components/AboutBitfex/AboutBitfex";
import Services from "./components/Services/Services";
import BFX from "./components/BFX/BFX";
import Footer from "./components/Footer/Footer";
import styled from "styled-components";
import AppBar from "./components/AppBar/AppBar";

function App() {
  return (
    <Body>
      <div className="container">
        <Navigation />
        <Header />
        <TradingSteps />
        <AppBar/>
        <AboutBitfex />
        <Services />
        <BFX />
      </div>
      <Container>
        <Footer />
      </Container>
    </Body>
  );
}

export default App;

const Body = styled.div`
background: #171717;
color: white !important;
`
const Container = styled.div`
background-color: #030303; 
padding: 40px 0;
border: none ;
border-radius: 40px 40px 0 0;
position: relative;
z-index: 1000;
`
