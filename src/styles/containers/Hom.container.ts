import styled from "styled-components";
import Marquee from "./Marque.container";

const HomeStyledContainer = styled.div`
    /* Color the border and text with theme.main */
    color: ${(props) => props.theme.colors.text};
    background: ${(props) => props.theme.colors.background};
    position: relative;
    width: 100vw;
    min-height: 100vh;
    padding: 0px;
    display: flex;
    justify-content: flex-start;   
    align-items: center;
    flex-direction : column;
    transition: all 0.2s ease-in-out;
    @media (max-width: 500px) {
        ${Marquee}{
            display: none;
        }
    }
`

export default HomeStyledContainer;