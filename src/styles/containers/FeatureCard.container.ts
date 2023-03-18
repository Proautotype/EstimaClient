import styled from "styled-components";
import { StyledP } from "./GDiv.container";


const FeatureCard = styled.div`
    width: 100%;
    /* height: 430px; */
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    display: flex;
    flex-direction: column; 
    padding:10px;   
    border: 2px solid transparent;
    position: relative;
    ${StyledP}{
        width: 100%;
        /* background: ${({ theme }) => theme.colors.altBackground}; */
        border-bottom: 2px solid ${({ theme }) => theme.colors.text};
    }
    transition: 0.2s all linear;
    cursor: pointer;
    &:hover{
        border: 2px solid transparent;
        /* border-image: repeating-linear-gradient(to right, #da1b60 0px, #ff8a00 40px , #da1b23) 1; */
        & div, p, i, > svg{
            background: linear-gradient(to left, #ff8a00, #da1b60 70%); 
            background-clip: text; 
            -webkit-background-clip: text; 
            -webkit-text-fill-color: transparent;;
        }
        &::before{
            opacity: 0.2;
            width: 0%;
        }
    }
    &::before{
        content: ' ';
        position: absolute;
        top: 0%;
        left: 0%;
        width: 100%;
        height: 100%;
        background: ${({theme})=> 
            theme.id === 0 ? "linear-gradient(to left, #ff8a00, #da1b60 70%)" : "linear-gradient(to left, white, darkgray 70%)"}; 
        opacity: 0;
        transform: skew(-2deg);
        transition: 0.5s;
        /* visibility: hidden; */
    }
`

export default FeatureCard;