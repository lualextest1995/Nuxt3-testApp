export const useUserStore = defineStore('user', () => {
  const _currentUserInfo = ref<{ name: string; Id: string } | null>(null)
  // 登入
  const login = (account: string) => {
    const user = JSON.parse(sessionStorage.getItem(account)!)
    const userInfo = { name: user.username, Id: account }
    localStorage.setItem('user', JSON.stringify(userInfo))
    updateUserInfo(userInfo)
    location.reload()
  }
  // 註冊
  const signup = (account: string, name: string, password: string) => {
    sessionStorage.setItem(account, JSON.stringify({ username: name, password }))
    sessionStorage.setItem('hasReload', 'false')
  }
  // 登出
  const logout = () => {
    localStorage.removeItem('user')
    location.reload()
  }
  // 更新使用者資訊
  const updateUserInfo = (info: { name: string; Id: string }) => {
    _currentUserInfo.value = info
  }

  return {
    currentUserInfo: computed(() => _currentUserInfo.value),
    login,
    signup,
    logout,
    updateUserInfo
  }
})
