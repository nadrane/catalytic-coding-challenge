import React from 'react'
import styled from 'styled-components'

import {
  LeftBarTitle,
} from '../../Atoms'

export default props => (
  <LeftBarTitle>
    {
      props.children
    }
    {
      props.showNum && ` (${props.num})`
    }
  </LeftBarTitle>
)
