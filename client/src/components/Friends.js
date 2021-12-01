import FriendsList from "./FriendsList";
import SearchUsers from "./SearchUsers";
import {useEffect, useState} from 'react'

export default function Friends({invite}){
    const [friends, setFriends] = useState([])

    useEffect(() => {
        fetch("/friends")
        .then(r=> r.json())
        .then(f=> setFriends(f))
    },[])
    
    return(
        <>
            <SearchUsers setFriends={setFriends}/>
            <FriendsList friends={friends} invite={invite}></FriendsList>
        </>
    )
}