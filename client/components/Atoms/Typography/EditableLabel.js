import React from 'react'
import styled from 'styled-components'

import styles from '../../styles'

export default (props) => {
  const Parent = styled.label`
    color: ${props.main ? styles.colors.pushLight : styles.colors.greyLight};
    font-family: Roboto, sans-serif;
    font-size: ${props.fontSize || '1rem'};
    ${!!props.onClick && 'cursor: pointer;'}
  `

  return (
    <Parent onClick={props.onClick}>
      {props.children} <i className="fa fa-pencil" />
    </Parent>
  )
}
