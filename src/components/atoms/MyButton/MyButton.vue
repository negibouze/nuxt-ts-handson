<template>
  <button :class="$style.button" :disabled="disabled" @click="handleClick">
    {{ label }}
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class MyButton extends Vue {
  @Prop({ required: true }) label!: string

  @Prop({ default: false }) disabled!: boolean

  handleClick() {
    this.$emit('click')
  }
}
</script>

<style lang="scss" module>
.button {
  min-width: 80px;
  height: 32px;
  border-radius: 8px;
}
</style>
