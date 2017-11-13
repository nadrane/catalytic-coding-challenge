import React from 'react'
import styled from 'styled-components'

const size = '3.5rem'
const Image = styled.img`
  width: ${size};
  height: ${size};
  border-radius: ${size};
  margin-bottom: 0.5rem;
`

const randomInt = (lb, ub) =>
  Math.floor((Math.random() * (ub - lb + 1)) + lb)

const randomImage = () =>
  `pb_${randomInt(1, 3)}.jpg`

export default props => <Image src={props.url || `/images/avatars/${randomImage()}`} />
