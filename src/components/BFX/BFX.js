import React from "react";
import styled from "styled-components";

const BFX = () => {
  return (
    <Section>
      <Heading>BFX</Heading>
      <Description>
        BFX is the ERC-20 utility token powering the Bitfex Ecosystem. Integral
        to the exchange, the BFX demand is fuelled by the various utilities it
        provides to its holders and its diminishing circulating supply.
      </Description>
      <Details>
        <Title>BFX UTILITY AND REWARDS</Title>
        <List>Earn BFX Rewards on the trading fees you pay</List>
        <List>Earn BFX Rewards on your maker trade volume</List>
        <List>Stake BFX to unlock exclusive benefits and rewards</List>
        <List>HODL BFX and get early bird prizes, benefits & more</List>
      </Details>
    </Section>
  );
};

export default BFX;

const Section = styled.div`
  margin: 60px 0;
`;
const Details = styled.div``;
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
  margin: 20px 10px;
`;
const List = styled.li`
  list-style: none;
  padding-left: 10px;
  &:before {
    content: "- ";
    color: white;
  }
`;
