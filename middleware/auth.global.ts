export default defineNuxtRouteMiddleware(async (to, from) => {
  const userStore = useUserStore()
  if (!sessionStorage.getItem('hasReload')) localStorage.removeItem('user')
  if (!localStorage.getItem('user') && to.path !== '/login') return navigateTo('/login')
  if (localStorage.getItem('user') && to.path === '/login') return navigateTo('/')
  if (localStorage.getItem('user')) {
    userStore.updateUserInfo(JSON.parse(localStorage.getItem('user')!))
  }
})
