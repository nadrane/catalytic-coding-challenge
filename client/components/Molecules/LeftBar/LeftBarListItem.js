import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import {
  LeftBarTitle,
  SmallBody,
} from '../../Atoms'
import styles from '../../styles'
import {
  redirectAndReset,
} from '../../../store'

const ContentWrapper = styled.div`
  min-height: ${styles.heights.leftBarItem};
  height: 100%;
`

const LeftNumber = styled.span`
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 1.8rem;
  margin: 0.7rem;
  color: ${styles.colors.grey};
`

const SmallerBody = SmallBody.extend`
  font-size: 0.9rem;
  margin-bottom: 0.7rem;
`

const LeftBarListItem = (props) => {
  const backgroundColor = props.selected ? styles.colors.greyLight : 'white'

  const Parent = styled.li`
    min-height: ${styles.heights.leftBarItem};
    background-color: ${backgroundColor};
    width: 100%;
    border: 1px solid ${styles.colors.dark};
    box-sizing: border-box;
    cursor: pointer;
    position: relative;
    list-style-type: none;
    display: flex;
    align-items: center;
  `

  return (
    <Parent onClick={() => props.redirectAndReset(props.stepNumber)}>
      <LeftNumber>{props.stepNumber}</LeftNumber>
      <ContentWrapper>
        <LeftBarTitle>{props.title}</LeftBarTitle>
        {
          !!props.assignedTo.length && (
            <SmallerBody><b>Assigned to{props.assignedTo.reduce((accum, name) => `${accum} ${name}`, '')}</b></SmallerBody>
          )
        }
        {
          props.previousStepNums && !!props.previousStepNums.length && (
            <SmallerBody>Depends on: {props.previousStepNums.reduce((accum, stepName) => `${accum} ${stepName}`, '')}</SmallerBody>
          )
        }
      </ContentWrapper>
    </Parent>
  )
}

const mapDispatch = dispatch => ({
  redirectAndReset: stepNumber => dispatch(redirectAndReset(`/step/${stepNumber}`)),
})

export default connect(null, mapDispatch)(LeftBarListItem)
