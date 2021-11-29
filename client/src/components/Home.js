import { Link } from "react-router-dom";
import styled from "styled-components"

export default function Home({ user, setUser}){

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }

    if (user){

        return(
            <div>
                <button onClick={handleLogoutClick}>Logout</button>
                <h1>Welcome {user.username}!</h1>
                <Link to="/group"><button>Let's eat</button></Link>
            </div>
      )
    }
    else {
        return(
            <div>
                <h1>Please login or signup</h1>
                <Link to="/login"><button class="button_slide slide_right" type="button">Login</button></Link>
                <Link to="/signup"><button class="button_slide slide_right" type="button">Signup</button></Link>

            </div>
        )
    }

}