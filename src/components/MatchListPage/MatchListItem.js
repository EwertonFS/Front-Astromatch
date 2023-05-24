import React from 'react'
import styled from "styled-components"

const ListItemContainer = styled.div`
display:flex;
align-items: center;
border-bottom: 1px solid gray;

:hover{
    background-color: lightblue;
}
`

const Avatar = styled.img`
border-radius:50%;
max-width:3em;
min-height:4em;
min-width:3em;


`

function MatchListItem(props){
// const profile = props.profile

    return (
    <ListItemContainer>
       <Avatar src={props.profile.photo}/>
       <p>{props.profile.name}</p>
       
  
    </ListItemContainer>
)
}

export default MatchListItem