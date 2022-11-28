import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Title from "./components/Title";
import Flex from "./components/Flex";
import Console from './components/Console';
import Button from './components/Button';

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
            <Flex direction={'column'}>
                <Console/>
                <Button primary={'red'} radius={'25px'} self={'center'}> Send </Button>
            </Flex>
        </AppWrapper>
    );
}

export default App;
