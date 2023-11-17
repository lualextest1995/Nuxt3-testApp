<template>
  <el-container>
    <el-header>
      <TheHeader />
    </el-header>
    <el-main>
      <el-tooltip effect="dark" :content="$t('ReturnToHomepage')" placement="right">
        <el-button
          type="success"
          :icon="House"
          circle
          class="home"
          size="small"
          v-show="route.name !== 'index'"
          @click="async () => await navigateTo('/')"
        />
      </el-tooltip>
      <slot />
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import { House } from '@element-plus/icons-vue'
const route = useRoute()
</script>

<style scoped>
.el-header {
  background-color: rgb(210, 232, 234);
}
.el-main {
  height: calc(100vh - 60px);
  overflow: auto;
  background-color: rgba(202, 233, 233, 0.2);
  position: relative;
  .home {
    position: absolute;
    z-index: 2;
    top: 3px;
    left: 3px;
    &:hover {
      background-color: orange;
      border: none;
    }
  }
}
</style>
