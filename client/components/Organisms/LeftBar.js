import React from 'react'
import styled from 'styled-components'

import {
  LeftBarListItem,
  LeftBarHeader,
} from '../Molecules'
import styles from '../styles'

const Parent = styled.aside`
  width: ${styles.widths.small};
  overflow: scroll;
  height: 100%;
`

const List = styled.ol`
  padding: 0;
  margin: 0;
`

export default props => (
  <Parent>
    {
      props.headers.map(header => <LeftBarHeader key={header}>{header}</LeftBarHeader>)
    }
    <List>
      {
        props.items.map(item =>
          <LeftBarListItem key={item.title} selected={item.selected} title={item.title}>{item.body}</LeftBarListItem>)
      }
    </List>
  </Parent>
)
