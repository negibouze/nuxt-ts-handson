import { mount } from '@vue/test-utils'
import Hello from './Hello.vue'

describe('Hello', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Hello, {
      propsData: {
        user: { name: 'John Doe', age: 20 }
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
