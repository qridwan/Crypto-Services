import React from "react";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import styled from "styled-components";

const Services = ({ services }) => {
  console.log(
    "🚀 ~ file: Services.js ~ line 6 ~ Services ~ services",
    services
  );
  return (
    <Section>
      <Heading>Services</Heading>
      <Row className="justify-content-center mt-5">
        {services.map((obj) => (
          <Col className=" mt-5" md={6}>
            <Row className="justify-content-center align-items-center">
              <Col md={4}>
                <img className="img-fluid" src={obj.img} alt="" />
              </Col>
              <Col md={6}>
                <Title>{obj.title}</Title>
                <SubTitle>{obj.details}</SubTitle>
                <Button href="#read-more">Read More</Button>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </Section>
  );
};

const mapStateToProps = (state) => ({
  services: state.services,
});

export default connect(mapStateToProps)(Services);

const Section = styled.div`
  margin: 50px 0;
  position: relative;
  z-index: 1000;
`;
const Heading = styled.p`
  font-size: 45px;
  font-weight: bold;
  text-align: center;
`;
const Title = styled.p`
  font-size: 25px;
  font-weight: 700;
  margin: 0;
`;
const SubTitle = styled.p``;
const Button = styled.a`
  text-decoration: underline;
  color: white;
`;
