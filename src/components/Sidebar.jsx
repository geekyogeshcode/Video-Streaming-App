import React, { useState } from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faClose, faHouse ,faCircleXmark, faMagnifyingGlass, faHeart, faUpload, faToggleOn, faRightFromBracket, faToggleOff} from '@fortawesome/free-solid-svg-icons';
import LogoDark from '../images/logo-dark.png'
import LogoLight from '../images/logo-light.png'
import LogoDarkFull from '../images/2.png'
import { Link } from 'react-router-dom';

let MenuContainer=styled.div`
user-select:none;
height:100vh;
flex:0.5;
display:flex;
flex-direction:column;
padding:0vw 1vw;
border-right:1px solid  ${({theme}) => theme.lightBorder};
background-color:${({theme}) => theme.bg};
color:${({theme}) => theme.text_primary};
&>a{
    text-decoration:none;
};
`;

let Logo  = styled.div`
    color:${({theme}) => theme.primary};
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:1vw;
    font-weight:bold;
    font-size:2vw;
    margin:1vw;
    &>img{
        width:3vw;
        aspect-ratio:1/1;
    }
`;
let Elements= styled.div`
    display:flex;gap:1vw; padding:1vh 2vh;cursor:pointer;
    color:${({theme}) => theme.text_secondary};
    &:hover{
        color:${({theme}) => theme.primary};
    }
    `;
let NavText=styled.div``;
let Close=styled.div`font-size:2vw`;
let Flex=styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
`;
let HrLine=styled.div`
    width:100%;
    height:1px;
    margin:1vw 0;
    background-color: ${({theme}) => theme.lightBorder};
`;

const Sidebar = ({ setOpenMenu,openMenu,setDarkMode,darkMode}) => {

    const menuItems=[
        {
            link:'/',
            name:"Dashboard",
            icon:<FontAwesomeIcon icon={faHouse} />
        },
        {
            link:'/search',
            name:"Search",
            icon:<FontAwesomeIcon icon={faMagnifyingGlass} />
        },
        {
            link:'/fav',
            name:"Favourites",
            icon:<FontAwesomeIcon icon={faHeart} />
        }
    ]

    const buttonItem=[
        {
            fun:() =>console.log("Upload"),
            name:"Upload",
            icon:<FontAwesomeIcon icon={faUpload} />
        },
        {
            fun:() =>{ setDarkMode(!darkMode) },
            name:darkMode?"Light Mode":"Dark Mode",
            icon:darkMode? <FontAwesomeIcon icon={faToggleOn}/> : <FontAwesomeIcon icon={faToggleOff} />
        },
        {
            fun:() =>console.log("Logout"),
            name:"Logout",
            icon:<FontAwesomeIcon icon={faRightFromBracket} />
        },
    ]

    

  return (
    <div>
        <MenuContainer >  
            <Flex>
                <Logo>
                    <img src={LogoDark} alt="" /> 
                    playIt
                </Logo>
            </Flex>
            {
                menuItems.map((item,i) =>(
                    <Link to={item.link} key={i} >
                        <Elements > 
                            {item.icon} 
                            <NavText >{item.name}</NavText>
                        </Elements>
                    </Link>
                ))
            }
            <HrLine />
            {
                buttonItem.map((item,i) =>(
                        <Elements onClick={item.fun} key={i}> 
                            {item.icon} 
                            <NavText >{item.name}</NavText>
                        </Elements>
                ))
            }
            
        
        </MenuContainer>
    </div>
  )
}

export default Sidebar
