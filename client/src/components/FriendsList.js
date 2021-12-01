import styled from "styled-components";

export default function FriendsList({invite, friends}){

    return(
        <> 
         <h3>Friends list:</h3>
          <List>
            {friends?.map((friend, index) => <li key={index}>{friend.username}
                 <input type="checkbox" key={index} id={friend.id} onClick={(e) => invite(friend, e)}/>
                </li>)}
          </List>
        </>
    )
}

const List = styled.ul`
background-color: rgba(188,55,55,1);
width: 100%
border-color: rgba(0,0,0,1);
`