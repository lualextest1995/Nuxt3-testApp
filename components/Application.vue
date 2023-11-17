<template>
  <el-card class="appCard">
    <div v-if="props.data.path === '/'" class="mask">
      <p>{{ $t('StayTuned') }}</p>
    </div>
    <div class="container">
      <img :src="props.data.src" alt="" />
    </div>
    <p class="title">{{ props.data.title }}</p>
    <el-tooltip
      effect="dark"
      :content="props.data.hasFavorited ? $t('RemoveFromFavorites') : $t('AddToFavorites')"
      placement="bottom"
    >
      <el-button
        :type="props.data.hasFavorited ? 'success' : ''"
        class="addFavorite"
        :icon="Star"
        circle
        @click.stop="emit('updateData', !props.data.hasFavorited)"
      />
    </el-tooltip>
  </el-card>
</template>

<script setup lang="ts">
import { Star } from '@element-plus/icons-vue'
const props = defineProps<{
  data: { id: string; title: string; src: string; hasFavorited: boolean; path: string }
}>()
const emit = defineEmits(['updateData'])
</script>

<style lang="scss" scoped>
.appCard {
  width: 400px;
  height: 420px;
  border-radius: 25px;
  text-align: center;
  position: relative;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    transition: all 0.25s ease-in-out;
  }
  .container {
    width: 100%;
    height: 340px;
    overflow: hidden;
    object-fit: contain;
    border-radius: 20px;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .title {
    font-size: 23px;
    margin-top: 10px;
  }
  .addFavorite {
    position: absolute;
    bottom: 10px;
    right: 15px;
  }
  .mask {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      font-size: 50px;
      color: white;
    }
  }
}
</style>
