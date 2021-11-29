import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <WutEat>Wut Eat</WutEat>
    </Container>
  );
}

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;

const WutEat = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: rgba(0,0,0,1);
  font-size: 34px;
  text-align: center;
`;


export default Header;
