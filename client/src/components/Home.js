import { Link } from "react-router-dom";
import Button from "../styles/Button"
import Header from "../styles/Header";
// import styled from "styled-components"
import ButtonContainer from "./ButtonContainer";

export default function Home({ user, setUser}){

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }

        return(
            <>
                <Button onClick={handleLogoutClick}>Logout</Button>
                <Header>Welcome {user.username}!</Header>
                <ButtonContainer>
                  <Link to="/group"><Button type="button">Let's eat</Button></Link>
                  <Link to="/history"><Button type="button">History</Button></Link>
                </ButtonContainer>
            </>
      )
}
