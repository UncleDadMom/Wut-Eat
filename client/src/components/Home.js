import { Link } from "react-router-dom";
import Button from "../styles/Button"
import Header from "../styles/Header";

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
                <Link to="/group"><Button type="button">Let's eat</Button></Link>
            </>
      )
}