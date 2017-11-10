import React from 'react'
import styled from 'styled-components'

import {
  LeftBarTitle,
  SmallBody,
} from '../../Atoms'
import styles from '../../styles'


export default (props) => {
  const backgroundColor = props.selected ? styles.colors.accent : 'white'

  const Parent = styled.li`
    height: ${styles.heights.leftBarItem};
    background-color: ${backgroundColor};
    list-style-position: inside;
    width: 100%;
  `

  return (
    <Parent>
      <LeftBarTitle>{props.title}</LeftBarTitle>
      <SmallBody>{props.children}</SmallBody>
    </Parent>
  )
}
