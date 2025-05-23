import React from 'react'
import styled, { keyframes } from 'styled-components'
import PT from 'prop-types'

const rotation = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(359deg); }
`

const opacity = keyframes`
  from { opacity: 0.2; }
  to { opacity: 1; }
`

const StyledSpinner = styled.div`
  animation: ${opacity} 1s infinite linear;

  h3 {
    transform-origin: center center;
    animation: ${rotation} 1s infinite linear;
  }
`

export default function Spinner({ on }) {
  if (!on) return null
  return (
    <StyledSpinner id="spinner">
      <h3>Loading...</h3>
    </StyledSpinner>
  )
}

Spinner.propTypes = {
  on: PT.bool.isRequired,
}
