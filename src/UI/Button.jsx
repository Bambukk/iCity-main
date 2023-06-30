import React from 'react'
import styled from 'styled-components'

const AuthButton = styled.button`
    display: block;
    width: 100%;
    color: black;
    font-size: 20px;
    font-family: Montserrat, sans-serif;
    background: none;
    cursor: pointer;
    border-radius: 5px;
    padding: 5px;
    transition: 0.2s ease-in-out;
    border: unset;
`

const Button = ({ children, onClick }) => {
  return (
    <AuthButton onClick={onClick}>{children}</AuthButton>
  )
}

export default Button
