import React from 'react'
import styled from 'styled-components'

import {
  LeftBarTitle,
} from '../../Atoms'

const Clickable = styled.button`
  border: 0;
  padding: 0;
  background: none;
  cursor: pointer;
`

export default props => (
  <Clickable onClick={props.onClick}>
    <LeftBarTitle>
      {
        props.open ? <i className="fa fa-caret-up" /> : <i className="fa fa-caret-down" />
      }
      {
        `  ${props.children}`
      }
      {
        props.showNum && ` (${props.num})`
      }
    </LeftBarTitle>
  </Clickable>
)
