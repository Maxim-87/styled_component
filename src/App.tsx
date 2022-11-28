import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Title from "./components/Title";

const AppWrapper = styled.div`
width: 100%;
min-height: 100vh;
padding: 20px;
background-color: antiquewhite;  
`



function App() {
  return (
    <AppWrapper>
        <Title color={'blue'}> hjbjhbjbhj </Title>
    </AppWrapper>
  );
}

export default App;
