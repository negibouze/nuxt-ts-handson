<template>
  <div>
    <h1>Hello {{ user.name }}!!!</h1>
    <span>You are {{ user.age }} years old.</span>
  </div>
</template>

<script lang="ts">
interface User {
  name: string
  age: number
}

export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>
