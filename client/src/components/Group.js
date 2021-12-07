import {useState} from 'react'
import styled from "styled-components";
import RestaurantVote from './RestaurantVote';
import Button from "../styles/Button"
import Friends from './Friends';
import Input from '../styles/Input';

export default function Group({user}){
    const [location, setLocation] = useState("")
    const [cuisine, setCuisine] = useState("")
    const [members, setMembers] = useState([user])
    const [restaurants, setRestaurants] = useState([])

    function createGroup(e){
        e.preventDefault()
        if (!location) {
            alert("Please enter a location")
        } else {
        const data = {location: location, cuisine: cuisine, groupMembers: members}
        fetch("/findNearbyRestaurants", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        .then(r=> r.json())
        .then(rest => setRestaurants(rest))
    }}
    
    function invite(friend, e){
        if (!e.target.checked) {
            setMembers((prevMember) => prevMember.filter(member => member !== friend))
            console.log(`uninvited ${friend}`)
        } else {
            setMembers((prevMember) => [...prevMember, friend])
            console.log(`invited ${friend}`)
        }
    }

    if (!restaurants.length) {
        return(
        <>
            <FormHead>Where are you and who are you eating with?</FormHead>
            <GroupForm onSubmit={createGroup}>
                <label htmlFor="location">Address</label>
                <Input id="location" type="text" 
                    value={location}
                    placeholder="Required"
                    onChange={(e)=>setLocation(e.target.value)}/>
                <label htmlFor="cuisine">Cuisine* </label>
                <Input id="cuisine" type="text"
                    value={cuisine}
                    placeholder="Optional"
                    onChange={(e)=>setCuisine(e.target.value)}/>
                <Button type="submit">Create Group</Button>
            </GroupForm>
            <Friends invite={invite}/>
        </>
    )} else {
        return(
            <>
                <RestaurantVote restaurants={restaurants}/>
            </>
        )
    }
}

const FormHead = styled.span`
 font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: rgba(0,0,0,1);
  font-size: 25px;
  text-align: center;
  border: double;
  `
const GroupForm = styled.form`
  height: 100%;
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