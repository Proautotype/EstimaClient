import React from 'react'
import styled from 'styled-components'

const EstimaLogo = (style:React.CSSProperties) => {
    return (
        <SvgWrapper style={{}}>            
            <EBar x="0.5" y="3"  width="40" height="13" rx="5" stroke="black" />
            <EBar x="0.5" y="20" width="20" height="13" rx="5" stroke="black" />
            <EBar x="0.5" y="37" width="40" height="13" rx="5" stroke="black" /> 
            <M width="4" height="12" y="20" x="22.5" rx={1.7}/>           
            <M width="4" height="9" y="20" x="28.5" rx={1.7}/>           
            <M width="4" height="12" y="20" x="34.5" rx={1.7}/>           
        </SvgWrapper>
    )
}

const SvgWrapper = styled.svg`
  width: 50px;
  height: 52px;
  /* background-color: aliceblue; */
`;

const EBar = styled.rect`
  stroke-width: 0px;
  fill: ${({theme})=>  theme.id === 0 ? "#da1b60" : theme.colors.altBackground};
`;

const ChartBar = styled.rect`
  stroke-width: 0px;
  animation-direction: alternate-reverse;
`;

const M = styled.rect`
  stroke-width: 0px;
  fill: ${({theme})=>  theme.id === 0 ? "#ff8a00" : "none"};;
  stroke: ${({theme})=>  theme.id === 0 ? "" : theme.colors.altBackground};
  stroke-width: 1px;
 transform-origin: center;
`;

export default EstimaLogo
