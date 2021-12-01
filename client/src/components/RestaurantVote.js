import {useState} from 'react'
import styled from "styled-components"
import ButtonContainer from './ButtonContainer'
import Button from '../styles/Button'

export default function RestaurantVote({restaurants}){
    const [vote, setVote] = useState(false)
    const yes = (e) => {setVote(true)}

    const no = (e) => {setVote(false)}
    let random = restaurants[Math.floor(Math.random() * restaurants.length)]


    return(
        <>
            <Image src={random.image_url} id={random.name}/>
            <ButtonContainer>
                <Button onClick={yes}>🤤</Button>
                <Button onClick={no}>👎</Button>

            </ButtonContainer>
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