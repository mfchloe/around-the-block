<template>
  <v-btn 
    :color="color" 
    :block="block"
    :disabled="disabled"
    rounded="xl"
    @click="onClick"
  >
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  props: {
    color: { type: String, default: "primary" },
    block: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    onClick: { type: Function, default: () => {} },
  },
};
</script>
