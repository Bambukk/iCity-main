import React from 'react';
import styled from 'styled-components';

const StyledPositiveButton = styled.button`
    display: block;
    width: 100%;
    color: black;
    font-size: 22px;
    font-family: Avimir, sans-serif;
    background: none;
    cursor: pointer;
    border-radius: 5px;
    padding: 5px;
    transition: 0.2s ease-in-out;
    border-radius: 30px;
    background: linear-gradient(167deg, #FFC5B9 0%, #FF8F78 100%);
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
    border:none;

`


const Button = ({ children, onClick }) => {
  return (
    <StyledPositiveButton onClick={onClick}>{children}</StyledPositiveButton>
  )
}


export default Button;
