import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

const steps = [
    {
        id: 1, title: `REGISTER`, about: `Sign-up for your free account in less than a minute.`
    },
    {
        id: 2, title: `DEPOSIT`, about: `Fund your account by depositing USDT.`
    },
    {
        id: 3, title: `TRADE`, about: `Make your first trade.`
    },
]
const TradingSteps = () => {
    return (
        <Section>
          <Heading>Start Trading in 3 easy steps</Heading>
          <StepContainer>
              {
                  steps.map(obj => <Row className=" align-items-center" key={obj.id}>
                  <Col lg={1}><SlNumber>{obj.id}.</SlNumber></Col>
                  <Col lg={10} >
                      <Title>{obj.title}</Title>
                      <SubTitle>{obj.about}</SubTitle>
                  </Col>
                  </Row>)
              }
          </StepContainer>  
        </Section>
    );
};

export default TradingSteps;

const Section = styled.div`
margin: 60px 0;
`
const Heading = styled.p`
font-size: 45px;
font-weight: bold;
`
const StepContainer = styled.div``
const SlNumber = styled.p`
font-size: 80px;
font-weight: 900;
text-align: center
`
const Title = styled.p`
font-size: 25px;
font-weight: 700;
margin: 0;
`
const SubTitle = styled.p``