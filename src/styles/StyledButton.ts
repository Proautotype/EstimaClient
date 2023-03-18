import styled from "styled-components";

const StyledButton = styled.button`
    font-size: 1em;
    border-radius: 3px;
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    border: 2px solid ${(props)  => props.theme.colors.text};
    cursor: pointer;
    transition: 0.2ms;
    width: auto !important;
`

export default StyledButton;