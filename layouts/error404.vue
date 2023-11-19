<template>
  <div class="container">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(184, 239, 239);
}
</style>
