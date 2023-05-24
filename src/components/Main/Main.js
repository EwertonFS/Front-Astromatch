import AppBar from "../AppBar/AppBar"
import ChooseProfilePage from "../ChosseProfilePage/ChooseProfilePage"
import MatchListPage from "../MatchListPage/MatchListPage"
import styled from "styled-components"
import { useState } from "react"


const MainContainer = styled.div`
display:flex;
border: 1px solid black;
border-radius: 3px;
width:22em;
height: 37em;
/* margin-left: auto;
margin-right: auto;
margin-top:5em;
margin-bottom: auto; */
flex-direction: column;
background-color:#c7ebeb;
`


function Main(){

    const [selectedPage, setSelectedPage] = useState('choose-profile')

    const renderSelectedPage = () => {
        // eslint-disable-next-line default-case
        switch(selectedPage){
            case'choose-profile':
            return <ChooseProfilePage/>
            case'match-listPage':
            return <MatchListPage/>
        }
    }


    const goChooseProfilePage = ()=>{
       setSelectedPage('choose-profile')
    }

    const goToMatchesListPages = ()=>{
    setSelectedPage('match-listPage')
    }


    return (
   <MainContainer>
    <AppBar goChooseProfilePage={goChooseProfilePage}goToMatchesListPages={goToMatchesListPages}/>
   {renderSelectedPage()}
        
   </MainContainer>
    )
}



export default Main