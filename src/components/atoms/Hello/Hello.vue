<template>
  <div>
    <h1>Hello {{ user.name }}!!!</h1>
    <span>
      You are <span :class="$style.age">{{ user.age }}</span> years old.
    </span>
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

<style lang="scss" module>
.age {
  color: #f00;
  font-weight: bold;
}
</style>
