import React from 'react'
import styled from 'styled-components'

import {
  TextInput,
  BigTextInput,
  TextLabelInput,
} from '../../Atoms'

const Parent = styled.div`

`

export default (props) => {
  const { bigInput, children, ...toPass } = props
  return (
    <Parent>
      {bigInput ? <BigTextInput defaultValue={props.default} key={props.default} {...toPass} /> : <TextInput />}
      <TextLabelInput {...toPass}>{children}</TextLabelInput>
    </Parent>
  )
}
