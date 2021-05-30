import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <Section>
            <TextField>
                <SubTitle>The First Complete</SubTitle>
                <Title>CRYPTO DERIVATIVES EXCHANGE</Title>
                <SubTitle>Trade Perpetuals, Futures and Exchange-quoted Spreads</SubTitle>
            </TextField>
            <Button>VIEW TRADE</Button>
        </Section>
    );
};

export default Header;

const Section = styled.div`
margin: 150px 0 ;
`
const TextField = styled.div``
const SubTitle = styled.p`
font-size: 13px;
margin: 0;
`
const Title = styled.p`
font-size: 45px;
font-weight: bold;
margin: 0;
`
const Button = styled.button`
padding: 8px 35px;
background: none;
color: white;
border: 1px solid white;
border-radius: 20px;
margin-top: 35px;
&:hover{
    background: white;
    color: black !important;
}
`
