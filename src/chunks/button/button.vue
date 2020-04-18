<template>
  <button class="normal"
  :class="type"
  :disabled="disabled"
  @click="callback($event)"
  >
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
  @import './button.scss';
</style>

<script>
export default {
  props: {
    type: String,
    disabled: Boolean,
  },
  methods: {
    callback(e) {
      this.$emit('click', e);
    },
  },
};

</script>
