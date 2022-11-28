import React from 'react';
import styled, {StyledComponent} from "styled-components";


const StyledTitle = styled.h1`
color: ${props => props.color};  
`

interface Title {
    children: string,
    color: string,
}

const Title = ({children, color}: Title) => {
    return (
        <StyledTitle color={color}>
            {children}
        </StyledTitle>
    );
};

export default Title;