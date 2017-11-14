import React from 'react'
import styled from 'styled-components'

import {
  DropDownHeader,
} from '../../Atoms'

const Parent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export default props => (
  <Parent>
    <DropDownHeader
      open={props.open}
      onClick={props.onClick}
      showNum={props.showNum}
      num={props.num}
    >
      {props.header}
    </DropDownHeader>
    {
      props.open && props.children
    }
  </Parent>
)
