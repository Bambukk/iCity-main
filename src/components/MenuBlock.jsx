import React from 'react'
import styled from 'styled-components'


const Menu = styled.div`
    position: absolute;
    display: flex;
    margin: auto;
    left: 400px;
    padding: 10px;
    border-radius: 0 0 20px 20px;
    gap: 30px;
    box-sizing: border-box;
    background: #FFC5B9;
    box-shadow: 1px 1px 3px 0;
    width: auto;
    z-index: 2;
    font-size: 30px;
`

const MenuLink = styled.div`
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

const MenuBlock = () => {
  return (
    <Menu>
      <MenuLink href='/map'>Карта</MenuLink>
      <MenuLink href='/events'>Мероприятия</MenuLink>
    </Menu>
  )
}

export default MenuBlock
