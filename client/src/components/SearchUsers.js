import {useState} from 'react'
import Button from '../styles/Button'
import styled from "styled-components"
import Input from '../styles/Input'

export default function SearchUsers({setFriends}){
    const [search, setSearch] = useState("")
    // const [foundUsers, setFoundUsers] = useState([])

    function handleSubmit(e){
        e.preventDefault()
        // if (friends.filter(friend => friend.username === search)){
        //     alert(`You are already friends with ${search}`)
        // } else {
        fetch(`/search/${search}`).then(r => {
            if (r.ok) {
                r.json().then(user => {
                    // setFoundUsers(user)
                    setFriends((prevMember) => [...prevMember, user])
                    alert(`Sent ${user.username} a friend request!`)})}
            else {r.json().then(err=> alert(err.error))}
        }
    )}
    
    return(
        <FormStyle id="search" onSubmit={handleSubmit}>
            <Input 
                value={search}
                placeholder={"Enter friend's username"}
                onChange={(e) => setSearch(e.target.value)}
            />
            <Button type="submit">Add Friend</Button>
        </FormStyle>
    )
}
const FormStyle = styled.form`
    display: flex;
    height: 100%;
    width: 100%;
    align-self: center;
    border-style: solid;
    flex-direction: column;
    border-width: 1px;
    background-color: #6B0000;
    border-color: rgba(0,0,0,1);
`
