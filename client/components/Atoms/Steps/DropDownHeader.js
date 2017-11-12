import React from 'react'
import styled from 'styled-components'

import {
  LeftBarTitle,
} from '../../Atoms'

export default props => (
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
)
