<template>
  <el-form :model="form" label-width="120px" status-icon>
    <slot name="header" />
    <el-form-item
      v-for="item in formStruct"
      :key="item.dataKey"
      :label="item.label"
      :prop="item.dataKey"
    >
      <!--輸入-->
      <template v-if="item.type === 'Input'">
        <el-input
          v-model="form[item.dataKey]"
          :disabled="item.disabled"
          :placeholder="item.placeholder"
        />
      </template>
      <!--密碼-->
      <el-input
        v-if="item.type === 'Password'"
        v-model="form[item.dataKey]"
        :disabled="item.disabled"
        :placeholder="item.placeholder"
        show-password
      />
      <!--文本-->
      <el-input
        v-if="item.type === 'Textarea'"
        v-model="form[item.dataKey]"
        :disabled="item.disabled"
        :placeholder="item.placeholder"
      />
      <!--選擇-->
      <el-select
        v-if="item.type === 'Select'"
        v-model="form[item.dataKey]"
        :disabled="item.disabled"
        :placeholder="item.placeholder"
      >
        <el-option
          v-for="p in item.options"
          :key="p.Code"
          :label="p.Name"
          :value="String(p.Code)"
        />
      </el-select>
    </el-form-item>
    <div class="message">
      <slot name="message" />
    </div>
    <el-form-item>
      <slot name="buttons" />
    </el-form-item>
    <slot name="footer" />
  </el-form>
</template>

<script setup lang="ts">
const props = defineProps<{
  form: Record<string, any>
  formStruct: {
    type: string
    label: string
    dataKey: string
    disabled?: boolean
    placeholder?: string
    options?: { Code: string | number; Name: string }[]
  }[]
}>()
const emit = defineEmits(['update:form'])
const form = computed({
  get: () => props.form,
  set: (value) => {
    emit('update:form', value)
  }
})
</script>

<style lang="scss" scoped>
.el-select {
  width: 100%;
}
.el-form {
  width: 90%;
  text-align: center;
}
.message {
  margin-bottom: 10px;
}
</style>
