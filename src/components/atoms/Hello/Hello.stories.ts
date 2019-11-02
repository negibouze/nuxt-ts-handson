import { storiesOf } from '@storybook/vue'
import Hello from './Hello.vue'

storiesOf('atoms/Hello', module).add('normal', () => ({
  components: { Hello },
  template: '<hello :user="user" />',
  data() {
    return { user: { name: 'Jhon', age: 10 } }
  }
}))
