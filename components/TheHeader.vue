<template>
  <el-row justify="center" align="middle">
    <el-col :span="12">
      <div class="logo" @click="navigateTo('/')">
        <img src="../assets/logo1.webp" alt="" />
      </div>
      <I18n class="i18n" />
    </el-col>
    <el-col :span="12" class="user">
      <el-dropdown trigger="click">
        <div class="container">
          <div class="userlogo">
            <img src="../assets/userLogo.webp" alt="" />
          </div>
          <p class="username">{{ userStore.currentUserInfo?.name }}</p>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="userStore.logout">{{ $t('logout') }}</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
const userStore = useUserStore()
</script>

<style lang="scss" scoped>
.el-row {
  height: 60px;
  position: relative;
}
.logo {
  height: 60px;
  width: 120px;
  overflow: hidden;
  object-fit: contain;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
}

.i18n {
  top: 14px;
  left: 80px;
}
.user {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .container {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-left: 10px;
    .userlogo {
      height: 50px;
      width: 50px;
      overflow: hidden;
      object-fit: contain;
      border-radius: 50%;

      img {
        width: 100%;
        height: 100%;
      }
    }
    .username {
      font-size: 20px;
      margin-left: 5px;
    }
  }
}
</style>
