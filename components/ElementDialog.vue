<template>
  <el-dialog
    v-model="dialogToggle"
    show-close
    append-to-body
    :close-on-click-modal="false"
    destroy-on-close
  >
    <slot name="header"></slot>
    <slot name="content"></slot>
    <slot name="footer"></slot>
  </el-dialog>
</template>

<script setup lang="ts">
const dialogToggle = inject('dialogToggle', false)
</script>

<style scoped></style>
