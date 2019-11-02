import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import MyButton from './MyButton.vue'

storiesOf('atoms/MyButton', module)
  .add('normal', () => ({
    components: { MyButton },
    template: '<my-button :label="label" @click="handleClick" />',
    data() {
      return { label: '長いラベル名のボタン' }
    },
    methods: {
      handleClick: action('clicked')
    }
  }))
  .add('disabled', () => ({
    components: { MyButton },
    template: '<my-button :label="label" :disabled="disabled" />',
    data() {
      return { label: 'ボタン', disabled: true }
    }
  }))
