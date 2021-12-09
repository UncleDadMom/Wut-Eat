import React from "react";
import styled from "styled-components";
import Input from "../styles/Input";
import Label from "../styles/Label";

export default function ConfirmPassword({passwordConfirmation, setPasswordConfirmation}){
    return (
        <Container>
            <Label>Confirm Password</Label>
            <Input 
            type="password"
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
    
    
