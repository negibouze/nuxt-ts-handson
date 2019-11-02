<template>
  <hello :user="user" />
</template>

<script lang="ts">
import 'reflect-metadata'
import { Component, Vue } from 'nuxt-property-decorator'
import Hello, { User } from '../components/atoms/Hello'

@Component({
  components: {
    Hello
  }
})
export default class extends Vue {
  private user: User = {
    name: 'Taro',
    age: 10
  }
}
</script>
