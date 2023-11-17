<template>
  <div class="pie" ref="pieRef"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts/core'
import {
  TitleComponent,
  type TitleComponentOption,
  TooltipComponent,
  type TooltipComponentOption,
  LegendComponent,
  type LegendComponentOption
} from 'echarts/components'
import { PieChart, type PieSeriesOption } from 'echarts/charts'
import { LabelLayout } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
  LabelLayout
])
type EChartsOption = echarts.ComposeOption<
  TitleComponentOption | TooltipComponentOption | LegendComponentOption | PieSeriesOption
>
const pieRef = ref<HTMLInputElement | null>(null)
const myChart = ref<any>()
const attrs = useAttrs()
const props = defineProps<{ option: EChartsOption | any }>()
const emit = defineEmits(['equipName'])

onMounted(() => {
  myChart.value = echarts.init(pieRef.value)
  myChart.value.setOption(props.option)
  myChart.value.on('click', (params: Record<string, any>) => {
    emit('equipName', params.name)
  })
})

// autoResize
watch(
  () => attrs,
  () => {
    myChart.value.resize()
  },
  { deep: true }
)

// 切換語言時更新
watch(
  () => props.option,
  (value) => {
    myChart.value.setOption(value)
  },
  {
    deep: true
  }
)
</script>

<style scoped>
.pie {
  height: v-bind('`${attrs.height}px`');
  width: v-bind('`${attrs.width}px`');
}
</style>
