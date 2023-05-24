import React from 'react'
import Main from './components/Main/Main';
import ResetButton from './components/ResetButton/ResetButton';
import styled from "styled-components"

const ContainerMain = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
justify-content: center;
align-items: center;
`

function App() {
  return (
    <ContainerMain>
    <Main/>
    <ResetButton/>
    </ContainerMain>
    
    
  );
}

export default App;


     
