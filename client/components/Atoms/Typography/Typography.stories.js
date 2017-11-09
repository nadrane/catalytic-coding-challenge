import React from 'react'
import { storiesOf } from '@storybook/react'

import {
  BoldTitle,
  NavText,
  SmallBody,
} from '../Typography'

storiesOf('Atoms/Typography', module)
  .add('BoldTitle', () => <BoldTitle>I am a bold title!</BoldTitle>)
  .add('NavText', () => <NavText>I am a link!</NavText>)
  .add('SmallBody', () => <SmallBody>Small Body Text :(</SmallBody>)
