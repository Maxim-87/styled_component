import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Title from "./components/Title";
import Flex from "./components/Flex";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  background-color: antiquewhite;
`


function App() {
    return (
        <AppWrapper>
            <Flex justify={'center'}>
                <Title color={'green'}> 32432535 </Title>
            </Flex>
        </AppWrapper>
    );
}

export default App;
