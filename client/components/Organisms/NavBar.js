import React from 'react'
import styled from 'styled-components'

import {
  MainNavGroup,
  NavIcon,
} from '../Molecules'
import styles from '../styles'

const Parent = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${styles.colors.dark};
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
    <NavIcon />
    <MainNavGroup links={leftLinks} />
    <MainNavGroup links={rightLinks} />
  </Parent>
)
