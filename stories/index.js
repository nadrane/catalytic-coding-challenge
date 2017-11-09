import { configure } from '@storybook/react'

const req = require.context('../client/components', true, /\.stories\.js$/)

const loadStories = () => req.keys().forEach(file => req(file))

configure(loadStories, module)
