import React from 'react'

import {
  SmallBody,
} from '../../Atoms'

export default props =>
  props.conditions && props.conditions.length ? (
    <ul>
      {
        props.conditions.map(condition => <li key={condition}><SmallBody>{condition}</SmallBody></li>)
      }
    </ul>
  ) : (
    <SmallBody>No Conditions</SmallBody>
  )
