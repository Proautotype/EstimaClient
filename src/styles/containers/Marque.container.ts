import styled, { keyframes } from "styled-components";
// import { StyledP } from "./GDiv.container";

const scrollAnime = keyframes`
     0%{
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`

const Marquee = styled.div`
    position: fixed;
    bottom: 5%;
    width: 100%;
    height: 50px;
    background: ${({theme})=> 
    theme.id === 0 ? "#0f0f0f10" : "#0f0f0f10"
  };
    text-align: center;
    display: flex;
    gap: 10px;
    div#marqueChild{        
        /* background: linear-gradient(to left, #ff8a00, #da1b60 70%); */
        background: ${({theme})=> theme.id === 0 
        ? "linear-gradient(to left, #ff8a00, #da1b60 70%)" 
        : "linear-gradient(to left, #da1b60, #ff8a00)"};
        font-size: 2em;
        opacity: 1;       
        width: 100px;
        height: 100%;
        min-width: 400px;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: space-around;
        svg{
          font-size: 1.3em;
          fill:white;
          /* background: linear-gradient(to left, #ff8a00, #da1b60 70%); */
        }
    }

`

export default Marquee;