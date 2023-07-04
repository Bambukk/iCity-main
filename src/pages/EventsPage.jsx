import React from 'react';
import EventsList from '../components/EventsList';
import Wrapper from '../UI/Wrapper';
import MenuBlock from '../components/MenuBlock';
import ProfileBlock from '../components/ProfileBlock';
import MenuBar from '../UI/MenuBar';
import styled from 'styled-components';
import NewMenuBlock from '../UI/NewMenuBlock'
import Logo from '../UI/Logo'
import SideBarTitle from '../UI/SideBarTitle'

const BackGroundBlock = styled.div`
  width:100%;
  height:100%;
  background: linear-gradient(162deg, #FFF 12.77%, #FFDADA 100%);
`

const EventPageGrid = styled.div`
  float:left;
  display: flex;
  height: 100%;
`

const EventsPage = () => {
  return (
    <BackGroundBlock>
      <Wrapper>
        <NewMenuBlock>
          <MenuBlock/>
        </NewMenuBlock>
        <ProfileBlock/>
        <EventPageGrid>
          <MenuBar>
            <Logo href='/'>iCity</Logo>
            <SideBarTitle>Абобус</SideBarTitle>  
          </MenuBar>
        </EventPageGrid> 
        {/* <EventsList/> */}
      </Wrapper>
    </BackGroundBlock>
  )
}

export default EventsPage;
