import {useState} from 'react'
import styled from "styled-components";
import RestaurantVote from './RestaurantVote';
import Button from "../styles/Button"
import Friends from './Friends';
import Input from '../styles/Input';
import Label from '../styles/Label';
import LandingForm from '../styles/LandingForm';
import Header from '../styles/Header';

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
            <Header>Wut Eat?</Header>
            <FormHead>Where are you and who are you eating with?</FormHead>
            <LandingForm onSubmit={createGroup}>
                <Label htmlFor="location">Address</Label>
                <Input id="location" type="text" 
                    value={location}
                    placeholder="Required"
                    onChange={(e)=>setLocation(e.target.value)}/>
                <Label htmlFor="cuisine">Cuisine* </Label>
                <Input id="cuisine" type="text"
                    value={cuisine}
                    placeholder="Optional"
                    onChange={(e)=>setCuisine(e.target.value)}/>
                <Button type="submit">Create Group</Button>
            </LandingForm>
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
  color: #ffe6e6;
  font-size: 25px;
  text-align: center;
  padding: 1px;
  margin: 10px;
  text-shadow: 0 0 10px black;
  `