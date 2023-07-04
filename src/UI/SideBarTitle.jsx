import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
    color: #FFF;
    font-size: 25px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-decoration:none;
    transition: 0.2s ease-in-out;
    margin:0 auto;
    margin-top:30px;
    &:hover {
        text-shadow: 5px 5px #FF9292;
    }
    &:active,&:visited{
        text-shadow: 3px 3px #FF9292 ;
    }
  
`


const SideBarTitle = ({ children, onClick, href }) => {
  return (
    <StyledLink href={href} onClick={onClick}>{children}</StyledLink>
  )
}

export default SideBarTitle;
