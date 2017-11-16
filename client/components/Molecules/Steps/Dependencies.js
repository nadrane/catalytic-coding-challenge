import React from 'react'

import {
  SmallBody,
} from '../../Atoms'

export default props =>
  props.previousStepNums && props.previousStepNums.length ?
    (
      <ul>
        {
          props.previousStepNums && props.previousStepNums.map(stepNum => (
            <li key={stepNum}>{stepNum}</li>
          ))
        }
      </ul>
    ) : (
      <SmallBody>No Dependencies</SmallBody>
    )
