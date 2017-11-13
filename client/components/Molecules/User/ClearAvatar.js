import React from 'react'
import styled from 'styled-components'

import {
  SmallBody,
} from '../../Atoms'

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

export default props => (
  <Parent onClick={props.onClick}>
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
