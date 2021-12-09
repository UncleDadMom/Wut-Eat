import {useState} from 'react'
import styled from "styled-components"
import ButtonContainer from './ButtonContainer'
import Button from '../styles/Button'
import { Link } from "react-router-dom";
import Header from '../styles/Header';


export default function RestaurantVote({restaurants}){
    const [rlength, setRlength] = useState(restaurants.length-1)
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
        }).then(r=>{
            if (r.status === 202){
            r.json().then((winningRest)=> {
                setWinner(winningRest)})
        } else {
            r.json().then(votes=> {
                // console.log(JSON.stringify(votes))
                // setVoteNumber(votes.length)
                setRlength(prevRlength => prevRlength - 1)})
            }})
    };

    const yes = (e) => {
        postVote(e.target.id, true)
        }

    function no(e){
        postVote(e.target.id, false)
    }

    let displayedRest = restaurants[rlength]
    let categories = displayedRest.categories.map((c,index) => <span key={index}>{c.title}; </span>)
    
    if (Object.keys(winner).length > 0) return(
        <Container>
            <Header>Let's eat at
                <em> {winner.name}</em>!
                <Link to="/"><button className="exit">Home</button></Link>
            </Header>
            <Image src={winner.image}/> 
        </Container>
    )

    if (rlength+1 > 0){
    return(
         <Container className="vote">
             <Image src={displayedRest.image} alt={displayedRest.name}></Image>
             <h1 id="restaurant-name">{displayedRest.name}</h1>
             <div id="categories">{categories}</div>
             <ButtonContainer>
                <Button id={displayedRest.id} onClick={(e)=>yes(e)}>🤤 🍽 🤤</Button>
                <Button id={displayedRest.id} onClick={(e)=>no(e)}>🛑 🙅‍♀️ 🛑</Button>
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
  overflow: auto;
  flex-direction: column;
  border-style: solid;
  box-shadow: -1px 1px 1.5px 1.5px #000 ;
  h1#restaurant-name {
      text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
      margin: 0;
  };
  span{padding: 1px;
    font-style: italic;
    text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;}
`;

const Image = styled.img`
max-width: 100%;
max-height: 100%;
display: block;
padding: 1px;
box-shadow: 1px 1px;
`;