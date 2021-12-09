import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import UsernameBox from "./UsernameBox";
import PasswordBox from "./PasswordBox";
import ConfirmPassword from "./ConfirmPassword";
import Button from "../styles/Button"
import Header from "../styles/Header";
import LandingForm from "../styles/LandingForm";

export default function Signup({setUser, username, setUsername, password, setPassword}){
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    let navigate = useNavigate();

    function handleSubmit(e) {
      e.preventDefault();
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          password_confirmation: passwordConfirmation,
        }),
      })
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user));
          navigate("/")
        } else {
            r.json().then(error => alert(error.errors));
        }
      });
    }

    return(
        <>
            <Header>Create a New User</Header>
            <LandingForm onSubmit={handleSubmit}>
                <UsernameBox username={username} setUsername={setUsername}
                    style={{
                    width: 375,
                    height: 60,
                    marginTop: 15
                    }}>
                </UsernameBox>
                <PasswordBox password={password} setPassword={setPassword}
                    style={{
                    width: 375,
                    height: 60,
                    overflow: "visible",
                    marginTop: 5,
                    alignSelf: "center"
                    }}>
                </PasswordBox>
                <ConfirmPassword passwordConfirmation={passwordConfirmation} setPasswordConfirmation={setPasswordConfirmation}
                    style={{
                    height: 60,
                    width: 375,
                    marginTop: 4
                    }}>
                </ConfirmPassword>
                <Button type="submit">Sign Up</Button>
            </LandingForm>
        </>
      
    )
}

