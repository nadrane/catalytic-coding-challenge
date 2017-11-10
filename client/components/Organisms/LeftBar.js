import React from 'react'
import styled from 'styled-components'

import {
  LeftBarListItem,
  LeftBarHeader,
} from '../Molecules'
import styles from '../styles'

const Parent = styled.ol`
  width: ${styles.widths.small};
`


export default props => (
  <Parent>
    {
      props.headers.map(header => <LeftBarHeader key={header}>{header}</LeftBarHeader>)
    }
    {
      props.items.map(item =>
        <LeftBarListItem key={item.title} selected={item.selected} title={item.title}>{item.body}</LeftBarListItem>)
    }
  </Parent>
)
