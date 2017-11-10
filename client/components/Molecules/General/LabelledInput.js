import React from 'react'
import styled from 'styled-components'

import {
  TextInput,
  BigTextInput,
  TextLabelInput,
} from '../../Atoms'

const Parent = styled.div`

`

export default props => (
  <Parent>
    {props.bigInput ? <BigTextInput /> : <TextInput />}
    <TextLabelInput>{props.children}</TextLabelInput>
  </Parent>
)
