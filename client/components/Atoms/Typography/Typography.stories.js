import React from 'react'
import styled from 'styled-components'

import { storiesOf } from '@storybook/react'

import {
  BoldTitle,
  NavText,
  SmallBody,
  LeftBarText,
} from '../Typography'

const Black = styled.div`
  background-color: black;
`

storiesOf('Atoms/Typography', module)
  .addDecorator(story => <Black>{story()}</Black>)
  .add('BoldTitle', () => <BoldTitle>I am a bold title!</BoldTitle>)
  .add('NavText', () => <NavText>I am a link!</NavText>)
  .add('SmallBody', () => <SmallBody>Small Body Text :(</SmallBody>)
  .add('LeftBarText', () => <LeftBarText>triggers</LeftBarText>)
