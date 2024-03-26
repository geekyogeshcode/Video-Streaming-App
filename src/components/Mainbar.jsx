import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Favourites from '../pages/Favourites';
import Search from '../pages/Search';
import Profile from '../pages/Profile';

let MainComponent=styled.div`
    display:flex;
    flex-direction:column;
    flex:3;
`;

const Mainbar = ({setOpenMenu,openMenu}) => {
  return (
    <MainComponent>
        <Navbar setOpenMenu={setOpenMenu} openMenu={openMenu} />

        <Routes>
            <Route path='/' exact element={<Dashboard/>}  ></Route>
            <Route path='/fav' exact element={<Favourites/>}></Route>
            <Route path='/search' exact element={<Search/>}></Route>
            <Route path='/profile' exact element={<Profile />}></Route>
        </Routes>
    </MainComponent>
  )
}

export default Mainbar
