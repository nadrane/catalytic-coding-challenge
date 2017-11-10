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

const LeftGroup = styled.div`
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
    <LeftGroup>
      <NavIcon />
      <MainNavGroup links={leftLinks} />
    </LeftGroup>
    <MainNavGroup links={rightLinks} />
  </Parent>
)
