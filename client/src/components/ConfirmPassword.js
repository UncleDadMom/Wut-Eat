import React from "react";
import styled from "styled-components";

export default function ConfirmPassword({passwordConfirmation, setPasswordConfirmation}){
    return (
        <Container>
            <PasswordLabel>Confirm Password</PasswordLabel>
            <PasswordInput 
            placeholder="Enter password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            ></PasswordInput>
        </Container>
      );
    }
    
    const Container = styled.div`
      display: flex;
      flex-direction: column;
      
    `;
    
    const PasswordLabel = styled.label`
      font-family: Roboto;
      font-size: 16px;
      text-align: left;
      color: rgba(16,15,15,1);
      font-style: normal;
      font-weight: 700;
      width: 150px;
      height: 30px;
      border: none;
      background: transparent;
    `;
    
    const PasswordInput = styled.input`
      font-family: Roboto;
      color: #000;
      font-size: 14px;
      flex: 1 1 0%;
      line-height: 16px;
      font-style: italic;
      font-weight: ;
      opacity: 0.6;
      border-width: 1px;
      border-color: #000000;
      left: 0px;
      height: 27px;
      bottom: 0px;
      background-color: rgba(230, 230, 230,1);
      right: 0px;
      border-style: solid;
      background: transparent;
      display: flex;
      flex-direction: column;
    `;
