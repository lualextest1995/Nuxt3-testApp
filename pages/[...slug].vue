<template>
  <el-card class="box-card">
    <div class="error-img">
      <img src="../assets/404.webp" alt="" />
    </div>
    <NuxtLink to="/">回首頁</NuxtLink>
  </el-card>
</template>

<script setup lang="ts">
definePageMeta({
  // middleware: ['error-page-rules'],
  layout: 'error404'
})
</script>

<style lang="scss" scoped>
.box-card {
  text-align: center;
  width: 500px;
  a {
    color: black;
    font-size: 30px;
    transition: all 0.5s ease;
    &:hover {
      color: rgb(202, 89, 89);
    }
  }
}
.error-img {
  width: 500px;
  height: 500px;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
}
</style>
