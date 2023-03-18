import styled from 'styled-components';

const NavContainer = styled.div`
    width: 95%;
    height: 70px;
    display: flex;
    gap: 10px;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    margin-bottom: 20px;
    border: none ;
    border-bottom: 2px solid ${(props)=>props.theme.colors.text};
    margin-top: 10px;
    transition: all 0.2s ease-in-out;

    
`

export default NavContainer;