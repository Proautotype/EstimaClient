import styled from "styled-components";

const Marquee = styled.div`
    position: fixed;
    bottom: 5%;
    width: 100%;
    height: 50px;
    background-color: ${(props) => props.theme.colors.text};
    opacity: 0.3;
`

export default Marquee;