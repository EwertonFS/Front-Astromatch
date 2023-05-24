import React from 'react'
import styled from "styled-components"
import FavoriteIcon from '@mui/icons-material/Favorite';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';

const ButtonsContainer = styled.div`
display:flex;
justify-content:space-around;

`
const Broken = styled.div`
cursor:pointer;

:hover{ 
transform: scale(1.2);
}
`

const HeartOpen = styled.div`
cursor:pointer;

:hover{ 
transform: scale(1.2);
}
`

function ChooseButtons(props){

   
    return(
        <ButtonsContainer>
            <Broken><HeartBrokenIcon color="secondary" fontSize="large" onClick={props.onclickNo}>Não</HeartBrokenIcon></Broken>
            <HeartOpen><FavoriteIcon color="secondary" fontSize="large" onClick={props.onclickYes} >Sim</FavoriteIcon></HeartOpen>
        </ButtonsContainer>
    )
}

export default ChooseButtons