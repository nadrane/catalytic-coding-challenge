import React from 'react'
import styled from 'styled-components'

import {
  MainNavGroup,
} from '../Molecules'

const Parent = styled.nav`
  width: 100%;
  display: flex;
`

const leftLinks = [
  'tasks',
  'routines',
  'templates',
]

const rightLinks = [
  'team',
  'cog', // TODO: use font awesome
]

export default () => (
  <Parent>
    <MainNavGroup links={leftLinks} />
    <MainNavGroup links={rightLinks} />
  </Parent>
)
