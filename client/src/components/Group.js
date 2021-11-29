import {useEffect, useState} from 'react'

export default function Group({user}){
    const [friends, setFriends] = useState([])
    const [location, setLocation] = useState("")
    const [cuisine, setCuisine] = useState("")
    const [members, setMembers] = useState(user.username)
   
    useEffect(() => {
        fetch("/friends")
        .then(r=> r.json())
        .then(f=>setFriends(f))
    },[])
    
    function invite(e){
        fetch("/invite", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({
                location: location,
                cuisine: cuisine,
                groupMembers: members
            })
        })
        .then(r=> r.json())
        .then(console.log)
    }
    function groupHandler(friend){
        setMembers((prevMember) => [prevMember, friend])
    }
    return(
        <div>
            <form>
                <label for="location">Address</label>
                <input id="location" type="text" 
                    value={location}
                    onChange={(e)=>setLocation(e.target.value)}/>
                <label for="cuisine">Cuisine</label>
                <input id="cuisine" type="text"
                    value={cuisine}
                    onChange={(e)=>setCuisine(e.target.value)}/>
                <h2>Who to eat with?</h2>
                <ul>
                {friends.map(friend => <li key={friend.id}>
                    {friend.username} <input type="checkbox" key={friend.id} id={friend.id} onClick={() => groupHandler(friend.username)}/>
                </li>)}
                </ul>
            </form>
        </div>
    )
}