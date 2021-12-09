import styled from "styled-components";

export default function FriendsList({invite, friends}){

    return(
        <FriendContainer> 
         <H3>Friends list</H3>
          <List>
            {friends?.map((friend, index) => <li key={index}>{friend.username}
                 <input type="checkbox" key={index} id={friend.id} onClick={(e) => invite(friend, e)}/>
                </li>)}
          </List>
        </FriendContainer>
    )
}
const H3 = styled.h3`
    margin: 0px;
    text-align: center;
    color: #ffe6e6;
    text-decoration: underline;
`
const List = styled.ul`
    width: 100%
    border-color: rgba(0,0,0,1);
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0px;

    li {
        padding: 0px;
        list-style-type: none;
        position: relative;
        color: #ffe6e6;
        border-bottom: 1px solid;
    }
    input {
        position: absolute;
        right: 0px;
    }
`
const FriendContainer = styled.div`
display: flex;
height: 100%;
width: 100%;
align-self: center;
border-style: solid;
flex-direction: column;
background-color: #6B0000;
border-width: 1px;
border-color: rgba(0,0,0,1);
`