<template>
  <el-space wrap :size="60">
    <Application
      v-for="(data, index) in datas"
      :key="index"
      :data="data"
      @click="goToUrl(data.path)"
      @updateData="
        (event) => {
          data.hasFavorited = event
        }
      "
    />
  </el-space>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const { success, warning } = useMessage()
// 動態引用圖片
const getAssetURL = (image: string) => {
  // 參考 https://cn.vitejs.dev/guide/assets.html#new-url-url-import-meta-url
  return new URL(`../assets/${image}`, import.meta.url).href
}
const datas = ref([
  {
    id: 'beerApp',
    title: toRef(() => t('BeerQuerySystem')),
    src: getAssetURL('beerApp.webp'),
    hasFavorited: false,
    path: 'beerApp'
  },
  {
    id: 'equipmentApp',
    title: toRef(() => t('EquipmentAnalysisSystem')),
    src: getAssetURL('equipmentApp.webp'),
    hasFavorited: false,
    path: 'equipmentApp'
  },
  {
    id: 'userApp',
    title: toRef(() => t('UserAnalysisSystem')),
    src: getAssetURL('userApp.webp'),
    hasFavorited: false,
    path: '/'
  }
])
const goToUrl = async (url: string) => {
  if (url === '/') return warning(t('NewSystemComingSoonStayTuned'))
  success(`${t('SystemLoading')}...`)
  await navigateTo(url)
}
</script>

<style scoped></style>
