import React, { useEffect } from 'react'
import NavContainer from '../styles/containers/Navbar.container';
import StyledButton from '../styles/StyledButton';
import {useSelector, useDispatch} from 'react-redux';
import { ReduxRootState } from '../statemanager/store';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { changeTheme as changeAppTheme } from '../statemanager/themeFeature/themeSlice';

const Navbar = () => {
  const appthemeId = useSelector((state:ReduxRootState)=> state.theme.id);
  const dispatch = useDispatch();

  function changeTheme(){
    dispatch(changeAppTheme())
  }

  useEffect(()=>{
    console.log(appthemeId)
  },[appthemeId])

  return (
    <NavContainer>
        <img src='EstimaLogo.svg' alt='logo' height={50}/>
        <StyledButton onClick={changeTheme}>
            {appthemeId === 0 ? <WbSunnyIcon/> : <DarkModeIcon/>}
        </StyledButton>
    </NavContainer>
  )
}

export default Navbar
