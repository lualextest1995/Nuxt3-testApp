<template>
  <el-row>
    <el-col :span="16">
      <EchartsPie :height="870" :width="1280" :option="option" @equipName="clickHandler" />
    </el-col>
    <el-col :span="8">
      <el-card v-show="data">
        <p class="listTitle">{{ $t('RandomSamplingList') }}</p>
        <ElementTable :data="tableData" :dataMap="formStruct" height="760" />
      </el-card>
    </el-col>
  </el-row>
  <ElementDialog width="500" top="70px">
    <template #header>
      <p class="dialogTitle">{{ $t('BrandProductInformation') }}</p>
    </template>
    <template #content>
      <ElementTable :data="itemTableData" :dataMap="formStruct" size="default" />
    </template>
    <template #footer>
      <div class="dialogButtons">
        <el-button type="success" @click="dialogToggle = false">{{ $t('confirm') }}</el-button>
      </div>
    </template>
  </ElementDialog>
  <div>
    <!-- {{ data?.map((i) => i.brand).filter((element, index, arr) => arr.indexOf(element) === index) }} -->
  </div>
</template>

<script setup lang="ts">
import API from '@/apis'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const { $loadingDecorator } = useNuxtApp()
const { success, error } = useMessage()
const { data } = await useCustomFetch(API.getAppliances, 100)
const tableData = ref<Record<string, any>[]>(data.value || [])
const dialogToggle = ref(false)
provide('dialogToggle', dialogToggle)
const formStruct = [
  { type: 'Input', label: toRef(() => t('brand')), dataKey: 'brand' },
  { type: 'Input', label: toRef(() => t('equipment')), dataKey: 'equipment' }
]

const itemTableData = ref<Record<string, any>[]>([])

const proportion = computed(() => {
  let result: Record<string, any> = {}
  data.value?.forEach((i) => {
    if (!result[i.brand]) {
      result[i.brand] = 1
    } else {
      result[i.brand]++
    }
  })
  return Object.entries(result).map((i) => ({ value: i[1], name: i[0] }))
})
const option = reactive({
  title: {
    text: toRef(() => t('EquipmentBrandDistributionMap')),
    subtext: toRef(() => t('RandomSampling')),
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: toRef(() => t('EquipmentBrandDistributionMap')),
      type: 'pie',
      radius: '80%',
      data: proportion.value,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
})

const clickHandler = (e: Event) => {
  itemTableData.value = data.value!.filter((i) => i.brand === e)
  dialogToggle.value = true
}

onMounted(() => {
  $loadingDecorator(() => success(t('WelcomeToTheEquipmentAnalysisSystem')))
})

useHead({
  title: 'EquipmentApp'
})
</script>

<style scoped>
.dialogTitle,
.listTitle {
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
}
.dialogButtons {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
