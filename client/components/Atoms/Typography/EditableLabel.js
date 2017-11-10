import React from 'react'
import styled from 'styled-components'

import styles from '../../styles'


export default (props) => {
  const Parent = styled.label`
    color: ${props.main ? styles.colors.pushLight : 'black'};
    font-family: Roboto, sans-serif;
    font-size: ${props.fontSize || '1rem'};
  `

  return (
    <Parent>
      {props.children} <i className="fa fa-pencil" />
    </Parent>
  )
}
