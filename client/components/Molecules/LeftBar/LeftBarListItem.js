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
    border: 1px solid ${styles.colors.dark};
    box-sizing: border-box;
  `

  return (
    <Parent>
      <LeftBarTitle>{props.title}</LeftBarTitle>
      {
        props.assignedTo && (
          <SmallBody><b>Assigned to {props.assignedTo}</b></SmallBody>
        )
      }
      {
        !!props.requiredPreviousSteps.length && (
          <SmallBody>Depends on: {props.requiredPreviousSteps}</SmallBody>
        )
      }
    </Parent>
  )
}
