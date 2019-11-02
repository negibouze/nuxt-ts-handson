<template>
  <div>
    <h1>Hello {{ user.name }}!!!</h1>
    <span>You are {{ user.age }} years old.</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { User } from './export-types'

@Component
export default class Hello extends Vue {
  @Prop({ required: true }) user!: User
}
</script>
