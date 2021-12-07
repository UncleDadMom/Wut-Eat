import {useState} from 'react'
import styled from "styled-components"
import ButtonContainer from './ButtonContainer'
import Button from '../styles/Button'
import { Link } from "react-router-dom";


export default function RestaurantVote({restaurants}){
    const [rlength, setRlength] = useState(restaurants.length-1)
    const [voteNumber, setVoteNumber] = useState(0)
    const [winner, setWinner] = useState({})

    function postVote(rest_id, tf){
        fetch("/vote", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({
                accept: tf,
                votes_left: rlength+1,
                rest_id: rest_id
            })
        }).then(r=>{console.log(r)
            if (r.status == 202){
            r.json().then((winningRest)=> {
                console.log(JSON.stringify(winningRest)); //why is this [object Object]
                console.log("r.accepted hit")
                setWinner(winningRest)})
        } else {
            r.json().then(votes=> {
                console.log(JSON.stringify(votes))
                setVoteNumber(votes.length)
                setRlength(prevRlength => prevRlength - 1)})
            }})
    };

    const yes = (e) => {
        console.log("yes button hit")
        postVote(e.target.id, true)
        }

    function no(e){
        console.log("no button hit")
        postVote(e.target.id, false)
    }

    // let categories = restaurants.map(r=> r.categories.map(c=>c.title))
    // let random = restaurants[Math.floor(Math.random() * restaurants.length)]
    let displayedRest = restaurants[rlength]
    let categories = displayedRest.categories.map((c,index) => <CatSpan key={index}>{c.title} </CatSpan>)
    
    if (Object.keys(winner).length > 0) return(
        <Container>
            <h1>The winner is: {winner.name}!</h1>
            <Image src={winner.image}/>
            <Link to="/"><button>Back to home</button></Link>
        </Container>
    )

    if (rlength+1 > 0){
    return(
         <Container>
             <Image src={displayedRest.image} alt={displayedRest.name} />
             <h3>{displayedRest.name}</h3>
             <p>{categories}</p>
             <ButtonContainer>
                <Button id={displayedRest.id} onClick={(e)=>yes(e)}>🤤</Button>
                <Button id={displayedRest.id} onClick={(e)=>no(e)}>👎</Button>
             </ButtonContainer>
         </Container>
    )} else { //
        return(
            <Container>
                You have voted on all nearby restaurants! Please wait while group finishes voting.
            </Container>
        )
    }
}

const Container = styled.div`
  display: flex;
  border-width: 1px;
  border-radius: 2px;
  border-color: #CCC;
  background-color: #FFF;
  overflow: hidden;
  flex-direction: column;
  border-style: solid;
  box-shadow: -2px 2px 1.5px  0.1px #000 ;
`;

const Image = styled.img`
background-color: #ccc;
flex: 1 1 0%;
width: 357px;
height: 357px;
display: flex;
flex-direction: column;
alignSelf: "center"
`;

const CatSpan = styled.span`
    padding: 1px;
`