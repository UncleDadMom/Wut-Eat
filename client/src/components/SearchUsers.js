import {useState} from 'react'
import Button from '../styles/Button'

export default function SearchUsers({setFriends}){
    const [search, setSearch] = useState("")
    const [foundUsers, setFoundUsers] = useState([])

    function handleSubmit(e){
        e.preventDefault()
        // if (friends.filter(friend => friend.username === search)){
        //     alert(`You are already friends with ${search}`)
        // } else {
        fetch(`/search/${search}`).then(r => {
            if (r.ok) {
                r.json().then(user => {
                    setFoundUsers(user)
                    setFriends((prevMember) => [...prevMember, user])
                    alert(`Sent ${user.username} a friend request!`)})}
            else {r.json().then(err=> alert(err.error))}
        }
    )}
    
    return(
        <form onSubmit={handleSubmit}>
            <input 
                style={BarStyling}
                value={search}
                placeholder={"Enter friend's username"}
                onChange={(e) => setSearch(e.target.value)}
            />
            <Button type="submit">Add Friend</Button>
        </form>
    )
}
const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"}