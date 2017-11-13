import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import {
  LeftBarTitle,
  SmallBody,
} from '../../Atoms'
import {
  updateActiveStep,
} from '../../../store'
import styles from '../../styles'

const LeftBarListItem = (props) => {
  const backgroundColor = props.selected ? styles.colors.greyLight : 'white'

  const Parent = styled.li`
    height: ${styles.heights.leftBarItem};
    background-color: ${backgroundColor};
    list-style-position: inside;
    width: 100%;
    border: 1px solid ${styles.colors.dark};
    box-sizing: border-box;
    cursor: pointer;
  `

  return (
    <Parent onClick={props.onClick}>
      <LeftBarTitle>{props.title}</LeftBarTitle>
      {
        props.assignedTo && (
          <SmallBody><b>Assigned to {props.assignedTo}</b></SmallBody>
        )
      }
      {
        props.requiredPreviousSteps && !!props.requiredPreviousSteps.length && (
          <SmallBody>Depends on: {props.requiredPreviousSteps}</SmallBody>
        )
      }
    </Parent>
  )
}

const mapDispatch = dispatch => ({
  updateActiveStep: step => dispatch(updateActiveStep(step)),
})

export default connect(null, mapDispatch)(LeftBarListItem)
