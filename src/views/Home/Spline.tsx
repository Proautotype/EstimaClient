import React from 'react'
import Spline from '@splinetool/react-spline';
import styled from 'styled-components';


const SplineBackground = () => {
  return (
    <BGWrapper>
      <Spline className='spline' scene="https://prod.spline.design/5CZ4ZGW9qp7pUoIv/scene.splinecode" />
    </BGWrapper>
  )
}

export default SplineBackground

const BGWrapper = styled.div`
    position: absolute;
    right: 10%;
    top: 12%;
    width: 350px;
    height: 250px;
    z-index: 10;
    .spline{
        /* width: 100px;
        height: 200px; */
    }
`