<template>
  <el-container>
    <el-aside />
    <el-main>
      <I18n />
      <slot />
    </el-main>
  </el-container>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.el-aside {
  height: 100vh;
  width: 70%;
  background: url(../assets/loginBg.webp);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
}
.el-main {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(232, 239, 240);
  position: relative;
}
</style>
