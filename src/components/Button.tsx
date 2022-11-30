import React, {ReactNode} from 'react';
import styled, {css, keyframes} from "styled-components";

interface InButton {
    width?: string,
    radius?: string,
    bgColor?: string,
    self?: string,
    primary?: any,
    outlined?: any,
    color?: string,
    children?: React.ReactNode
}

interface InCss {
    color?: string,
    background?: string,
    border?: string,
}

const rotateAnimation = keyframes `
0% {
  transform: rotateY(0deg);
}
100% {
  transform: rotateY(360deg)
}`

const StyledButton = styled.button<InButton> `
width: ${props => props.width || '100px'};  
border: none;
border-radius: ${props => props.radius || 'none'};
padding: 8px 12px;
font-size: 18px;
cursor: pointer;
background-color: ${props => props.bgColor || '#61dafb'};  
&:focus {
  outline: none;
}
&:hover {
  animation: ${rotateAnimation} 2s infinite linear;
}  
  
align-self: ${props => props.self || 'stretch'};

${props => props.primary && css<InCss> `
color: ${props => props.color || 'yellow'};
background: ${props => props.background || 'black'};
border: 2px solid ${props => props.border || 'red'};
`}

${props => props.outlined && css<InCss> `
color: ${props => props.color || 'white'};
background: transparent;
border: 2px solid ${props => props.border || 'white'};
`}
`
const LargeButton = styled(StyledButton) `
width: 250px`

const Button = (props: InButton) => {
    return (
        <StyledButton {...props}/>
    );
};

export default Button;