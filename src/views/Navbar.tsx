import React from 'react'
import NavContainer from '../styles/containers/Navbar.container';
import StyledButton from '../styles/StyledButton';
import { useSelector, useDispatch } from 'react-redux';
import { ReduxRootState } from '../statemanager/store';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { changeTheme as changeAppTheme } from '../statemanager/themeFeature/themeSlice';
import { useNavigate } from 'react-router-dom';
import EstimaLogo from '../styles/containers/EstimaLogo';

const Navbar = () => {
    const appthemeId = useSelector((state: ReduxRootState) => state.theme.id);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    function changeTheme() {
        dispatch(changeAppTheme())
    }

    function nav(loc?: string) {
        navigate(!loc ? "/" : loc)
    }

    return (
        <NavContainer>
            {/* <img src={'EstimaLogo.svg'} alt='logo' height={40} style={{cursor:"pointer"}} onClick={()=>{nav()}} /> */}
            <div style={{cursor:"pointer"}} onClick={()=>{nav()}}>
                <EstimaLogo/>
            </div>
            <StyledButton onClick={changeTheme}>
                {appthemeId === 0 ? <WbSunnyIcon /> : <DarkModeIcon />}
            </StyledButton>
        </NavContainer>
    )
}

export default Navbar
