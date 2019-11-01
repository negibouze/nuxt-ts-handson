<template>
  <hello :user="user" />
</template>

<script lang="ts">
import Hello from '../components/atoms/Hello'

export default {
  components: {
    Hello
  },
  data() {
    return {
      user: {
        name: 'Taro',
        age: 10
      }
    }
  }
}
</script>
