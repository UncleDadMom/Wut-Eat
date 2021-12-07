import FriendsList from "./FriendsList";
import SearchUsers from "./SearchUsers";
import {useEffect, useState} from 'react'
// import ButtonContainer from "./ButtonContainer";

export default function Friends({invite}){
    const [friends, setFriends] = useState([])

    useEffect(() => {
        fetch("/friends")
        .then(r=> r.json())
        .then(f=> setFriends(f))
    },[])

    return(
        <div id="friends" style={Styles}>
            <SearchUsers setFriends={setFriends}/>
            <FriendsList friends={friends} invite={invite}></FriendsList>
        </div>
    )
}
const Styles = { width: "475px", display: "flex", alignSelf: "center", flexDirection: "column"}