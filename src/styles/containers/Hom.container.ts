import styled from "styled-components";
import COLORS from "../colors";

const HomeStyledContainer = styled.div`
    /* Color the border and text with theme.main */
    color: ${(props) => props.theme.colors.text};
    background: ${(props) => props.theme.colors.background};
    width: 100vw;
    height: 100vh;
    padding: 0px;
    display: flex;
    justify-content: center;    
`

//bloom
HomeStyledContainer.defaultProps = {
    theme: {
        id: 0,
        colors: {
            text: COLORS.text
        }
    }
}

export default HomeStyledContainer;