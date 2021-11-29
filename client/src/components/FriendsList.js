import {useEffect, useState} from 'react'

export default function FriendsList({invite}){
    const [friends, setFriends] = useState([])

    useEffect(() => {
        fetch("/friends")
        .then(r=> r.json())
        .then(f=>setFriends(f))
    },[])

    return(
        <ul>
            {friends.map((friend, index) => <li key={index}>{friend.username}
                 <input type="checkbox" key={index} id={friend.id} onClick={(e) => invite(friend, e)}/>
                </li>)}
        </ul>
    )
}