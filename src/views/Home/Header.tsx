import React from 'react'
import styled from 'styled-components';
import HeaderContainer from '../../styles/containers/Header.container';

interface props {
    text: string[],
    direction?: "left" | "right"
}

const Header = ({ text, direction }: props) => {
    return (
        <HeaderContainer >
            <div style={{ display: "flex", gap: "5px" }}>
                <TextContainer style={{
                    background: 
                        "linear-gradient(to right, #da1b60, #ff8a00 50%) background-clip: text -webkit-background-clip: text -webkit-text-fill-color: transparent"                         
                }}>
                    {text.map((el, i) => {
                        let fontSize = i === 1 ? "0.7em" : i === 2 ? "0.5em" : "1em";
                        let textDecoration  =  i === 2 ? "italic" : "normal";
                        return <p key={i+el} style={{ fontSize, textDecoration}}>{el}</p>
                    })}
                </TextContainer>                
            </div>
            <Divider />
        </HeaderContainer>
    )
}

export default Header

const Divider = styled.div`
    height: 10px;
    width: 70px;
    background-color: ${(props) => props.theme.colors.text};
    margin-top: 30px;
    border-radius: 10px;
    background:  ${(props) => props.theme.id === 0 ?
        "linear-gradient(to right, #da1b60, #ff8a00 50%)" :
        "black"};
  
    transform: skew(-20deg);
`
// linear-gradient(to right, #da1b60, #ff8a00 50%)
const TextContainer = styled.div`
    background: ${(props) => props.theme.id === 0
        ? "linear-gradient(to right, #da1b60, #ff8a00 50%)" : "black"};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: flex;
    flex-direction: column;
    /* align-items: flex-end; */
`

/**
 *  background: repeating-linear-gradient(
        to right,
        #da1b60 0,
        #da1b60 10px,
        #ff8a00 10px,
        #ff8a00 20px
    );
*/