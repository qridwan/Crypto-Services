import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import telegram from "../../img/telegram.png"
import facebook from "../../img/facebook.png"
import linkedin from "../../img/linkedin.png"
import twitter from "../../img/twitter.png"
import instagram from "../../img/instagram.png"
import youtube from "../../img/youtube.png"

const Footer = () => {
  return (
    <Section className="container ">
      <Row>
        <Col md={4}>
          <Title>ABOUT</Title>
          <Underline></Underline>
          <List>About Us</List>
          <List>Privacy Policy</List>
          <List>Terms of Use</List>
        </Col>
        <Col md={4}>
          {" "}
          <Title>CONTACT US</Title>
          <Underline></Underline>
          <List>Support</List>
          <Info>support@bitfex.com</Info>
          <List>Queries</List>
          <Info>info@bitfex.com</Info>
        </Col>
        <Col md={4}>
        <Title>SOCIAL</Title>
          <Underline></Underline>
          <Row>
              <Col md={2} className="p-3">
                  <img className="img-fluid" src={telegram} alt="" />
              </Col>
              <Col md={2} className="p-3">
              <img className="img-fluid" src={twitter} alt="" />
              </Col>
              <Col md={2} className="p-3">
              <img className="img-fluid" src={linkedin} alt="" />
              </Col>
          </Row>
          <Row>
              <Col md={2} className="p-3">
              <img className=""  src={facebook} alt="" height="32px"/>
              </Col>
              <Col md={2} className="p-3">
              <img className="img-fluid" src={instagram}  alt="" />
              </Col>
              <Col md={2} className="p-3">
              <img className="img-fluid" src={youtube} alt="" />
              </Col>
          </Row>
        </Col>
      </Row>
      <Copyright>Copyright © 2021 Bitfex, All Right Reserved</Copyright>
    </Section>
  );
};

export default Footer;

const Section = styled.div`
background-color: #030303; 
position: relative;
z-index: 1000;
`;
const Underline = styled.p`
  content: " ";
  width: 20%;
  height: 2px;
  background: white;
`;
const Title = styled.p`
  font-size: 25px;
  font-weight: 700;
  margin: 0;
`;
const List = styled.p`
margin: 0;`;
const Copyright = styled.p`
margin: 0;
font-size: 10px;
`;
const Info = styled.p`
font-size: 10px;
`;
