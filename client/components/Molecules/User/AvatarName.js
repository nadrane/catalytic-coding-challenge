import React from 'react'
import styled from 'styled-components'

import {
  UserImg,
  SmallBody,
} from '../../Atoms'
import styles from '../../styles'

export default (props) => {
  const Parent = styled.div`
    height: fit-content;
    width: fit-content;
    margin: 1.5rem 1.2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    ${props.selected && `
        border: 2px solid ${styles.colors.pushDark};
        background-color: ${styles.colors.pushLight};
      `}
  `
  return (
    <Parent>
      <UserImg url={props.url} />
      <SmallBody>{props.children}</SmallBody>
    </Parent>
  )
}
