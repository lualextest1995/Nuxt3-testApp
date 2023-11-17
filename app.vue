<template>
  <NuxtLayout>
    <el-config-provider :locale="zhTW">
      <NuxtPage />
    </el-config-provider>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import zhTW from 'element-plus/es/locale/lang/zh-tw'
import 'dayjs/locale/zh-tw'
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
