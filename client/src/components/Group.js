import {useState} from 'react'
import styled from "styled-components";

import FriendsList from "./FriendsList"

export default function Group({user}){
    const [location, setLocation] = useState("")
    const [cuisine, setCuisine] = useState("")
    const [members, setMembers] = useState([user])
    
    function createGroup(e){
        e.preventDefault()
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
    function invite(friend, e){
        if (!e.target.checked) {
            setMembers((prevMember) => prevMember.filter(member => member !== friend))
            console.log(`uninvited ${friend}`)
        } else {
            setMembers((prevMember) => [...prevMember, friend])
            console.log(`invited ${friend}`)
        }
    }

    return(
        <Container>
            <FormHead>Where are you and who are you eating with?</FormHead>
            <GroupForm onSubmit={createGroup}>
                <label htmlFor="location">Address</label>
                <input id="location" type="text" 
                    value={location}
                    placeholder="Required"
                    onChange={(e)=>setLocation(e.target.value)}/>
                <label htmlFor="cuisine">Cuisine* </label>
                <input id="cuisine" type="text"
                    value={cuisine}
                    placeholder="Optional"
                    onChange={(e)=>setCuisine(e.target.value)}/>
                <FriendsList invite={invite}/>
                <button>Create Group</button>
            </GroupForm>
        </Container>
    )
}

const FormHead = styled.span`
 font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: rgba(0,0,0,1);
  font-size: 30px;
  text-align: center;
  `
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const GroupForm = styled.form`
  height: 150px;
  background-color: rgba(188,55,55,1);
  border-width: 1px;
  border-color: rgba(0,0,0,1);
  width: 475px;
  flex-direction: column;
  display: flex;
  align-self: center;
  border-style: solid;
  justify-content: center;
`