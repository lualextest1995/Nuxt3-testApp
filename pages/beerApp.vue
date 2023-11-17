<template>
  <div>
    <el-card>
      <p class="appName">{{ $t('BeerQuerySystem') }}</p>
      <ElementFormRow :form="form" :formStruct="formStruct">
        <template #buttons>
          <el-button plain @click="searchHandler">{{ t('search') }}</el-button>
        </template>
      </ElementFormRow>
    </el-card>
    <br />
    <el-card v-show="data">
      <ElementTable :data="tableData" :dataMap="formStruct" height="470" />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import API from '@/apis'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const { $loadingDecorator } = useNuxtApp()
const { success, error } = useMessage()
const { data } = await useCustomFetch(API.getBeers, 100)
const tableData = ref<Record<string, any>[]>(data.value || [])
const form = reactive({
  brand: '',
  name: '',
  style: '',
  hop: '',
  yeast: '',
  malts: '',
  ibu: '',
  alcohol: '',
  blg: ''
})
// 轉換codeMap
const convertCodeMap = (key: string) => {
  return data.value
    ? [
        { Code: '', Name: toRef(() => t('all')) },
        ...data
          .value!.map((i) => i[key])
          .filter((element, index, arr) => arr.indexOf(element) === index)
          .map((i) => ({ Code: i, Name: i }))
      ]
    : [{ Code: '', Name: toRef(() => t('all')) }]
}

const brandOptions = computed(() => convertCodeMap('brand'))
const styleOptions = computed(() => convertCodeMap('style'))
const hopOptions = computed(() => convertCodeMap('hop'))
const maltsOptions = computed(() => convertCodeMap('malts'))

const formStruct = [
  {
    type: 'Select',
    label: toRef(() => t('brand')),
    dataKey: 'brand',
    options: toValue(brandOptions)
  },
  { type: 'Input', label: toRef(() => t('name')), dataKey: 'name' },
  {
    type: 'Select',
    label: toRef(() => t('style')),
    dataKey: 'style',
    options: toValue(styleOptions)
  },
  { type: 'Select', label: toRef(() => t('hop')), dataKey: 'hop', options: toValue(hopOptions) },
  { type: 'Input', label: toRef(() => t('yeast')), dataKey: 'yeast' },
  {
    type: 'Select',
    label: toRef(() => t('malts')),
    dataKey: 'malts',
    options: toValue(maltsOptions)
  },
  { type: 'Input', label: toRef(() => t('ibu')), dataKey: 'ibu' },
  { type: 'Input', label: toRef(() => t('alcohol')), dataKey: 'alcohol' },
  { type: 'Input', label: toRef(() => t('blg')), dataKey: 'blg' }
]
// 查詢
const searchHandler = () => {
  if (!data.value) return error(`${t('ServerError')}!!!`)
  const condition = Object.entries(form).filter((i) => i[1] !== '')
  if (condition.length === 0) {
    tableData.value = data.value
    return $loadingDecorator(() => success(t('QuerySuccessful')))
  }
  tableData.value = data.value
  for (const i in Object.fromEntries(condition)) {
    tableData.value = tableData.value.filter((p) => p[i] === Object.fromEntries(condition)[i])
  }
  return $loadingDecorator(() => success(t('QuerySuccessful')))
}

onMounted(() => {
  $loadingDecorator(() => success(t('WelcomeToTheBeerQuerySystem')))
})

useHead({
  title: 'BeerApp'
})
</script>

<style lang="scss" scoped>
.el-card {
  border-radius: 20px;
  .appName {
    font-size: 30px;
    margin: 0 0 10px 20px;
  }
}
</style>
