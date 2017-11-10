import React from 'react'

import {
  MainSection,
  Card,
} from '../Atoms'

const Parent = MainSection.extend`
  padding: 1rem;
`

export default () => (
  <Parent>
    <Card>
      CONTENT
    </Card>
  </Parent>
)
