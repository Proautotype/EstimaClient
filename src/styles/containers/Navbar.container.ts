import styled from 'styled-components';

const NavContainer = styled.div`
    width: 95%;
    height: 70px;
    display: flex;
    gap: 10px;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    border: 1px solid ${(props)=>props.theme.colors.text};
    border-top: none ;
    margin-top: 10px;
`

export default NavContainer;