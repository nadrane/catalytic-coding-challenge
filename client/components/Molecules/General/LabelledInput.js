import React from 'react'

import {
  TextInput,
  BigTextInput,
  TextLabelInput,
} from '../../Atoms'

export default (props) => {
  const { bigInput, children, ...toPass } = props
  return (
    <div>
      {bigInput ? <BigTextInput defaultValue={props.default} key={props.default} {...toPass} /> : <TextInput />}
      <TextLabelInput {...toPass}>{children}</TextLabelInput>
    </div>
  )
}
