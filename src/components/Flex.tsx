import React from 'react';
import styled from "styled-components";

interface InFlex {
    direction?: string,
    items?: string,
    justify?: string,
    margin?: number,
    children?: React.ReactNode
}

const StyledFlex = styled.div<InFlex>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.items || 'row'};
  justify-content: ${props => props.justify || 'row'};
  margin: ${({margin}) => margin || '0'};
`

const Flex = (props: InFlex) => {
    return <StyledFlex {...props}/>
};

export default Flex;