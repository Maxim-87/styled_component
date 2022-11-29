import React from 'react';
import styled from "styled-components";

interface InLine {
    color?: string,
}

const StyledLine = styled.div `
font-size: 24px;
color: ${props => props.color || 'white'}`

const Line = (props: InLine) => {
    return <StyledLine {...props}/>
};

export default Line;