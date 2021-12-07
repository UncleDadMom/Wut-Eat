import React from "react";
import styled from "styled-components";
import Input from "../styles/Input";

export default function ConfirmPassword({passwordConfirmation, setPasswordConfirmation}){
    return (
        <Container>
            <PasswordLabel>Confirm Password</PasswordLabel>
            <Input 
            placeholder="Enter password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            ></Input>
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
    
