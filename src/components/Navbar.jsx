import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

let NavDiv=styled.div`
    display:flex;
    justify-content:space-between;
    padding:1vw 2vw;
    height:10vh;
    align-items:center;
    // border:1px solid red;
    color:${({theme}) => theme.text_primary};
    gap:1vw;
    background:${({theme}) => theme.bgLight};
    box-shadow:0 4px 30px rgba(0,0,0,0.1);
    backdrop-filter:blur(5.7px);
    --webkit-backdrop-filter:blur(5.7px);
`;
let ButtonDiv=styled.div`
    font-size:1.1vw;
    cursor:pointer;
    max-width:7vw;
    display:flex;
    align-items:center;
    gap:1vw;
    padding:1vw 2.5vw;
    border:1px solid ${({theme}) => theme.primary};
    color:${({theme}) => theme.primary};
    justify-content:center;
    border-radius:2vw;
`;
let IconDiv=styled.div`
padding:1vh;
cursor:pointer;
// border:1px solid;
`;
const Navbar = ({setOpenMenu,openMenu}) => {
  return (
    <NavDiv>
        <IconDiv>
            <FontAwesomeIcon icon={faBars} onClick={() =>setOpenMenu(!openMenu)} />
        </IconDiv>
            <h2>Welcome, Yogesh</h2>
        <ButtonDiv>
            <FontAwesomeIcon icon={faUser} />
            <h4>Login</h4>
        </ButtonDiv>
    </NavDiv>
  )
}

export default Navbar
