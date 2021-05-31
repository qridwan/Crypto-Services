import React from "react";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import styled from "styled-components";

const AboutBitfex = (props) => {
console.log("🚀 ~ file: AboutBitfex.js ~ line 7 ~ AboutBitfex ~ props", props)
  const { about } = props;
  return (
    <AboutSection>
      <Heading>Why Bitfex</Heading>
      <Description>
        Bitfex is a P2P crypto-products trading platform, providing traders a
        diverse range of crypto contracts and a highly secure & intuitive
        trading interface, powered by institutional-grade infrastructure. Built
        by veteran traders and supported by a diverse community of VCs, Traders
        and Investors from both traditional and crypto space.
      </Description>
      <Row className="justify-content-center">
        {about.map((obj) => (
          <Col className="px-3 py-5" key={obj.id} md={6}>
            <Row>
              <Col md={2}>
                <img src={obj.img} alt=""  width='78px' height="100px" />
              </Col>
              <Col md={9}>
                <Title>{obj.title}</Title>
                <SubTitle>{obj.details}</SubTitle>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </AboutSection>
  );
};

const mapStateToProps = (state) => (
     {
  about: state.about,
});

export default connect(mapStateToProps)(AboutBitfex);

const AboutSection = styled.div`
position: relative;
z-index: 1000;
`;
const Heading = styled.p`
font-size: 45px;
font-weight: bold;
text-align: center;
`;
const Description = styled.p`
text-align: center;
`;
const Title = styled.p`
font-size: 25px;
font-weight: 700;
margin: 0;
`;
const SubTitle = styled.p``;
