<template>
  <ElementForm :form="$i18n" :formStruct="formStruct" label-width="100px" class="i18n" />
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const formStruct = reactive([
  {
    type: 'Select',
    label: toRef(() => t('language')),
    dataKey: 'locale',
    options: [
      { Name: '繁體中文', Code: 'zhTW' },
      { Name: 'English', Code: 'en' }
    ]
  }
])
</script>

<style scoped>
.i18n {
  width: 230px;
  position: absolute;
  top: 10px;
  right: 20px;
}
</style>
