import { Link } from "react-router-dom";
import Button from "../styles/Button"
import Header from "../styles/Header";
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
        <Header>Wut Eat?</Header>
        <Header>Welcome {user.username}!
        <ButtonContainer>
          <button className="exit" onClick={handleLogoutClick}>Logout</button>
          <Link to="/group"><Button type="button">Let's eat</Button></Link>
          <Link to="/history"><Button type="button">History</Button></Link>
        </ButtonContainer>
        </Header>
      </>
    )
}
