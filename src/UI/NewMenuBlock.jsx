import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
width:400px;
position:absolute;
left:350px;
`


const Wrapper = ({ children }) => {
  return (
    <StyledWrapper>{ children }</StyledWrapper>
  )
}

export default Wrapper;
