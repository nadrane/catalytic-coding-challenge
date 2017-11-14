import React from 'react'
import {withRouter} from 'react-router'

import {
  DropDown,
} from '../../Molecules'
import {
  Users,
} from '../../Organisms'

const otherHeaders = [
  { header: 'Maximum Duration', showNum: false },
  { header: 'Dependencies', showNum: true, num: 0 },
  { header: 'Conditions', showNum: true, num: 0 },
  { header: 'Maximum Duration', showNum: false },
]

const StepDropDown = (props) => {
  console.log(props)
  const { num, users } = props
  return (
    <div>
      <DropDown header="Assign User" showNum num={num}>
        <Users users={users} />
      </DropDown>
      {
        otherHeaders.map(header => (
          <DropDown header={header.header} showNum={header.showNum} num={header.num} />
        ))
      }
    </div>
  )
}

export default withRouter(StepDropDown)
