import { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme,darkTheme } from './utils/Themes'
import Sidebar from './components/Sidebar';
import {BrowserRouter} from 'react-router-dom'
import Mainbar from './components/Mainbar';

const Container = styled.div`
  display:flex;
  background:${({theme}) => theme.bg};
  width:100%;
  height:100vh;
  color:${({theme}) => theme.text_secondary}
`;

function App() {
const[darkMode,setDarkMode]=useState(true)
const [openMode,setOpenMode]=useState(false)
console.log(openMode);

  return (
    <>
    <ThemeProvider theme={darkMode?darkTheme:lightTheme}>
      <BrowserRouter> 
      
          {
            openMode?<Container><Mainbar setOpenMenu={setOpenMode} openMenu={openMode} /></Container>:
            <Container>
                <Sidebar setOpenMenu={setOpenMode} openMenu={openMode} setDarkMode={setDarkMode} darkMode={darkMode} />
                <Mainbar setOpenMenu={setOpenMode} openMenu={openMode} />
            </Container>
          }
            
        
      </BrowserRouter>

    </ThemeProvider>
    </>
  )
}

export default App
