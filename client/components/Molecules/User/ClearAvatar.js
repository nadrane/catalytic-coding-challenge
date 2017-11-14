import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import {
  SmallBody,
} from '../../Atoms'
import {
  clearAllUserStep,
} from '../../../store'

const Text = SmallBody.extend`
  text-align: center;
`

const Parent = styled.div`
  height: fit-content;
  width: fit-content;
  margin: 1.5rem 1.2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
`

const XWrapper = styled.span`
  width: 3.5rem;
  height: 3.5rem;
  margin-bottom: 0.5rem;
  text-align: center;
`

const ClearAvatar = props => (
  <Parent onClick={props.clearAllUserStep}>
    <XWrapper>
      <i className="fa fa-times-circle fa-3x" />
    </XWrapper>
    <Text>
      None
      <br />
      <i>(clear all)</i>
    </Text>
  </Parent>
)

const mapDispatch = (dispatch, ownProps) => ({
  clearAllUserStep: () => dispatch(clearAllUserStep(ownProps.activeStep)),
})

export default connect(null, mapDispatch)(ClearAvatar)
