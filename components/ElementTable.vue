<template>
  <el-table :data="props.data" :tableLayout="'auto'" stripe border>
    <el-table-column
      v-for="item in props.dataMap"
      :key="item.dataKey"
      :prop="item.dataKey"
      :label="toValue(item.label)"
    />
  </el-table>
</template>

<script setup lang="ts">
const props = defineProps<{
  data: Record<string, any>[]
  dataMap: { label: string | Readonly<Ref<string>>; dataKey: string; [key: string]: any }[]
}>()
</script>

<style scoped></style>
