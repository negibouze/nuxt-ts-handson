import { configure, addDecorator, addParameters } from '@storybook/vue'
import { themes } from '@storybook/theming'
import centered from '@storybook/addon-centered/vue'

addDecorator(centered)

addParameters({
  options: {
    theme: themes.dark
  }
})

const req = require.context('../../src/components', true, /\.stories\.ts$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
