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
    min-height: ${styles.heights.leftBarItem};
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
        !!props.assignedTo.length && (
          <SmallBody><b>Assigned to{props.assignedTo.reduce((accum, name) => `${accum} ${name}`, '')}</b></SmallBody>
        )
      }
      {
        console.log('asdf', props.previousStepNums)
      }
      {
        props.previousStepNums && !!props.previousStepNums.length && (
          <SmallBody>Depends on: {props.previousStepNums.reduce((accum, stepName) => `${accum} ${stepName}`, '')}</SmallBody>
        )
      }
    </Parent>
  )
}

const mapDispatch = dispatch => ({
  updateActiveStep: step => dispatch(updateActiveStep(step)),
})

export default connect(null, mapDispatch)(LeftBarListItem)
