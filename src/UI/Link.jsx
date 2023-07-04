import React from 'react';
import styled from 'styled-components';
import link from './link.css';

const StyledLink = styled.a`
  color: #FFF;
  font-size: 24px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration:none;
  transition: 0.2s ease-in-out;

  &:hover {
    text-shadow: 5px 5px #FF9292;
  }
  &:active,&:visited{
    text-shadow: 3px 3px #FF9292 ;
  }
  
`


const Link = ({ children, onClick, href }) => {
  return (
    <StyledLink className={link} href={href} onClick={onClick}>{children}</StyledLink>
  )
}

export default Link;
