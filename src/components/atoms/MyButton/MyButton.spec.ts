import { mount } from '@vue/test-utils'
import MyButton from './MyButton.vue'

describe('MyButton', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(MyButton, {
      propsData: {
        label: 'ボタン'
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
