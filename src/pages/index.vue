<template>
  <div>
    <hello :user="user" />
    <my-button label="ボタン" @click="handleClick" />
  </div>
</template>

<script lang="ts">
import 'reflect-metadata'
import { Component, Vue } from 'nuxt-property-decorator'
import Hello, { User } from '../components/atoms/Hello'
import MyButton from '../components/atoms/MyButton'

@Component({
  components: {
    Hello,
    MyButton
  }
})
export default class extends Vue {
  private user: User = {
    name: 'Taro',
    age: 10
  }

  handleClick() {
    console.log('click')
  }
}
</script>
