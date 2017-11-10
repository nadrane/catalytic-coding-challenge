import React from 'react'
import styled from 'styled-components'

import {
  NavText,
} from '../../Atoms'

export default props => (
  <div>
    {
      props.links.map(link => <NavText>{link}</NavText>)
    }
  </div>
)
