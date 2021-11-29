import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";

function Header() {
  return (
    <Container>
      <WutEat>Wut Eat</WutEat>
      <Icon2Row>
        <MaterialCommunityIconsIcon
          name="food-off"
          style={{
            color: "rgba(128,128,128,1)",
            fontSize: 40
          }}
        ></MaterialCommunityIconsIcon>
        <MaterialCommunityIconsIcon
          name="food"
          style={{
            color: "rgba(128,128,128,1)",
            fontSize: 40,
            marginLeft: 214
          }}
        ></MaterialCommunityIconsIcon>
      </Icon2Row>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 375px;
  height: 109px;
  flex-direction: column;
`;

const WutEat = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: rgba(0,0,0,1);
  font-size: 34px;
  text-align: center;
`;

const Icon2Row = styled.div`
  height: 43px;
  flex-direction: row;
  display: flex;
  margin-top: 17px;
  margin-left: 43px;
  margin-right: 38px;
`;

export default Header;
