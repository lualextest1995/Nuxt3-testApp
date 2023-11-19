<template>
  <div class="loginForm">
    <div class="logo">
      <img src="../assets/logo.webp" alt="" />
    </div>
    <h1 class="title">{{ currentTitle }}</h1>
    <!--登入-->
    <ElementForm
      v-if="currentState"
      :form="formLogin"
      :formStruct="formStructLogin"
      label-width="70px"
    >
      <template #buttons>
        <el-button type="primary" @click="loginHandler">{{ $t('confirm') }}</el-button>
        <el-button @click="$loadingDecorator(checkoutCurrentState)">
          {{ $t('GoToRegister') }}
        </el-button>
      </template>
    </ElementForm>
    <!--註冊-->
    <ElementForm v-else :form="formSignup" :formStruct="formStructSignup" label-width="150px">
      <template #message>
        <p v-color>{{ checkMsg }}</p>
      </template>
      <template #buttons>
        <el-button type="primary" @click="signupHandler">{{ $t('confirm') }}</el-button>
        <el-button @click="$loadingDecorator(checkoutCurrentState)">
          {{ $t('GoToLogin') }}
        </el-button>
      </template>
    </ElementForm>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const { $loadingDecorator } = useNuxtApp()
const { success, error } = useMessage()
const userStore = useUserStore()
const currentState = ref(true)
const currentTitle = computed(() => (currentState.value ? t('login') : t('signup')))
const initFormLogin = {
  account: '',
  password: ''
}
const initFormSignup = {
  name: '',
  account: '',
  password: '',
  confirmPassword: ''
}
const formLogin = reactive({ ...initFormLogin })
const formSignup = reactive({ ...initFormSignup })
const formStructLogin = reactive([
  {
    type: 'Input',
    label: toRef(() => t('account')),
    dataKey: 'account'
  },
  {
    type: 'Password',
    label: toRef(() => t('password')),
    dataKey: 'password'
  }
])
const formStructSignup = reactive([
  {
    type: 'Input',
    label: toRef(() => t('username')),
    dataKey: 'name'
  },
  {
    type: 'Input',
    label: toRef(() => t('RegisterAccount')),
    dataKey: 'account'
  },
  {
    type: 'Password',
    label: toRef(() => t('RegisterPassword')),
    dataKey: 'password'
  },
  {
    type: 'Password',
    label: toRef(() => t('ConfirmPassword')),
    dataKey: 'confirmPassword'
  }
])
const checkoutCurrentState = () => {
  currentState.value = !currentState.value
}
const checkMsg = computed(() => {
  if (
    formSignup.password &&
    formSignup.confirmPassword &&
    formSignup.confirmPassword !== formSignup.password
  )
    return t('ConfirmPasswordMustBeSameAsPassword')
  return ''
})
const signupHandler = () => {
  if (!formSignup.name) return error(t('UsernameCannotBeBlank'))
  if (!formSignup.account) return error(t('PleaseEnterRegisterAccount'))
  if (!formSignup.password) return error(t('PleaseEnterRegisterPassword'))
  if (!formSignup.confirmPassword) return error(t('PleaseEnterRegisterConfirmPassword'))
  if (formSignup.password !== formSignup.confirmPassword)
    return error(t('PasswordandConfirmPasswordMustMatch'))
  if (sessionStorage.getItem(formSignup.account))
    return error(t('ThisAccountHasAlreadyBeenRegistered'))
  userStore.signup(formSignup.account, formSignup.name, formSignup.password)
  $loadingDecorator(() => success(t('RegistrationSuccessful')))
  currentState.value = true
}
const loginHandler = () => {
  if (!formLogin.account) return error(t('PleaseEnterAccount'))
  if (!formLogin.password) return error(t('PleaseEnterPassword'))
  if (!sessionStorage.getItem(formLogin.account))
    return error(t('NoSuchAccountFoundPleaseRegisterThisAccountFirst'))
  const user = JSON.parse(sessionStorage.getItem(formLogin.account)!)
  if (user.password !== formLogin.password) return error(t('IncorrectLoginPassword'))
  userStore.login(formLogin.account)
}

watch(currentState, (value) => {
  if (value) {
    Object.assign(formSignup, initFormSignup)
  } else {
    Object.assign(formLogin, initFormLogin)
  }
})

definePageMeta({
  layout: 'login'
})
</script>

<style lang="scss" scoped>
.loginForm {
  min-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid rgb(255, 255, 255);
  border-radius: 20px;
  background-color: white;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  .logo {
    width: 100px;
    height: 100px;
    margin: 20px;
    object-fit: contain;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .title {
    margin-bottom: 20px;
  }
}
</style>
