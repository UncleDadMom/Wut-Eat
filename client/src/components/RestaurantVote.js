import {useState} from 'react'
import styled from "styled-components"

export default function RestaurantVote({restaurants}){
    const [chosenRestaurant, setChosenRestaurant] = useState({})
    let vote = (e) => setChosenRestaurant(e.target.id)
    let random = restaurants[Math.floor(Math.random() * restaurants.length)]


    return(
        <>
            <Image src={random.image_url} id={random.id}/>
        </>
    )
}
const Image = styled.img`
background-color: #ccc;
flex: 1 1 0%;
width: 357px;
height: 357px;
display: flex;
flex-direction: column;
alignSelf: "center"
`;