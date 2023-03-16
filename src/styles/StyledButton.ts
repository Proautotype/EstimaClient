import styled from "styled-components";
import COLORS from "./colors";

const StyledButton = styled.button`
    font-size: 1em;
    border-radius: 3px;
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    border: 2px solid ${(props)  => props.theme.colors.background};
    cursor: pointer;
    transition: 0.2ms;
`

//bloom
StyledButton.defaultProps = {
    theme:{
        id: 0,
        colors:{
            text: COLORS.light,
            background: COLORS.dark
        }
    }
}

export default StyledButton;