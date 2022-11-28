import React from 'react';
import styled, {StyledComponent} from "styled-components";


const StyledTitle = styled.h1<InTitle>`
color: ${props => props.color};  
`

interface InTitle {
    children: string,
    color: string,
}

const Title = (prop: InTitle) => {
    return (
        <StyledTitle {...prop}/>
    );
};

export default Title;