import styled from 'styled-components';

const HeaderContainer = styled.div`
     color: ${(props) => props.theme.colors.text};
     width: 95%;
     height: 200px;
     text-align: left;
     border-bottom: ${(props) => props.theme.colors.text};
     font-size: 2em;
     font-weight: bold;
     display: flex;
     justify-content: center;
     flex-direction: column;
     text-transform : uppercase ;
     transition: all 0.2s ease-in-out;
`

export default HeaderContainer;