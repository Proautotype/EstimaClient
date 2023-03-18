import React, { ReactElement } from 'react'
import FeatureCard from '../../styles/containers/FeatureCard.container'
import { StyledP,StyleDesc } from '../../styles/containers/GDiv.container'
import StyledButton from '../../styles/StyledButton'

interface FeatureProp{
    title: string,
    intro: string,
    next?: string,
    titleIcon?: ReactElement,
    nextAction?: React.MouseEventHandler,
    name: string
}

const Feature = ({title, intro,next, titleIcon, nextAction, name}:FeatureProp) => {
  return (
    <FeatureCard>
        <StyledP style={{fontWeight:"bold", padding:"20px", fontSize:"1.5em", textTransform:"uppercase"}}>{title} {titleIcon}</StyledP>      
        <StyleDesc>{intro}</StyleDesc>   
        <StyleDesc style={{height:"auto", border:"none"}}>What we Offer</StyleDesc> 
        {next && <StyledButton name={name} onClick={nextAction}>{next}</StyledButton>}
        {/* nextAction */}
    </FeatureCard>
  )
}

export default Feature
