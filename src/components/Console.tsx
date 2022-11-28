import React from 'react';
import styled from "styled-components";

interface InConsole {

}


const StyledConsole = styled.textarea `
width: 100%;
height: 70vh;  
border: none;
resize: none; 
background-color: transparent;
&:focus {
  outline: none;
}  
`

const Console = (props: InConsole) => {
    return (
        <StyledConsole {...props}/>
    );
};

export default Console;