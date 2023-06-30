import React, { useState } from 'react'
import styled from 'styled-components'
import avatar from '../images/avatar.jpg'
import Button from '../UI/Button'
import RegistrationForm from './RegistrationForm'
import LogoIcon from '../images/Logo.png'

const Menu = styled.div`
  width:1600px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: Montserrat, sans-serif;
`
const Logo = styled.div`
  width:120px;
  height:120px;
  font-size: 30px;
  padding:11px;
`
const Profile = styled.div`
  width:400px;
  font-size: 20px;
  border: 2px #FFDADA solid;
  border-radius: 30px 0px 0px 30px;
  background: linear-gradient(355deg, #FFDADA 0%, rgba(255, 218, 218, 0.00) 100%);
`
const Avatar = styled.img`
  height: 40px;
  border-radius: 50%;
  border: 1px solid orange;
`
const MenuList = styled.ul`
  width: 600px;
  height:80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const MenuItem = styled.div`
  height: 70px
  text-decoration: none;
  align-items: center;
`
const MenuItemMedium = styled.div`
 
  padding-right:40px;
  padding-left:40px;
  border-right:2px black solid;
  border-left:2px black solid;

`
const Link = styled.a`
  color: black;
  font-size: 30px;
  &:link {
    text-decoration: none;
  }
  &:visited {
    text-decoration: none;
  }

  position:relative;

  &:before {
    content: attr(data-text);
    position: absolute;
    top: 10px;
    left: 5px;
    opacity: 0;
  }
  
  &:hover:before,
  &:focus:before {
     opacity: 0.2;
     background-color: rgba(0,0,0,0);
     box-shadow: 2px -2px rgba(0,0,0,0),
                 -4px -4px rgba(0,0,0,0),
                 inset -2px -2p rgba(0,0,0,0)
  }
`
const LinkMedium = styled.a`
  font-size: 30px;
  display:block;
  margin:0 auto;
  color: black;
  &:link {
    text-decoration: none;
  }
  &:visited {
    text-decoration: none;
  }
  position:relative;
  &:before {
    content: attr(data-text);
    position: absolute;
    top: 10px;
    left: 5px;
    opacity: 0;
  }
  
  &:hover:before,
  &:focus:before {
     opacity: 0.2;
     background-color: rgba(0,0,0,0);
     box-shadow: 2px -2px rgba(0,0,0,0),
                 -4px -4px rgba(0,0,0,0),
                 inset -2px -2p rgba(0,0,0,0)
  }

`


const Navbar = () => {
  const [active, setActive] = useState(false);
  const [popupTitle, setPopupTitle] = useState('');
  const [user, setUser] = useState({})

  function authPop() {
    setPopupTitle('Аутентификация');
    setActive(true);
  }

  function registrationPop() {
    setPopupTitle('Регистрация');
    setActive(true);
  }

  function logout() {
    setUser({})
  }



  return (
    <>
      <RegistrationForm active={active} setActive={setActive} popupTitle={popupTitle}/>
      <Menu>
        <Logo>
         <img src = {LogoIcon}></img>
        </Logo>
        <MenuList>
          <MenuItem><Link href='#' data-text = "Карта">Карта</Link></MenuItem>
          <MenuItemMedium><LinkMedium href='#' data-text = "Мероприятия">Мероприятия</LinkMedium></MenuItemMedium>
          <MenuItem><Link href='#' data-text = "Сборы">Сборы</Link></MenuItem>
        </MenuList>
        
        <Profile>
          {user.name
          ? <Avatar src={avatar}></Avatar>
          : <Button onClick={authPop}>Войти</Button>
          }
          {user.name
            ? <Link onClick={logout}>{user.name}</Link>
            : <Button onClick={registrationPop}>Зарегистрироваться</Button>
          }
        </Profile>
      </Menu>
    </>
    
  )
}

export default Navbar
