export const useMessage = () => {
  const success = (msg: string) => {
    ElMessage({
      showClose: true,
      message: msg,
      type: 'success'
    })
  }
  const error = (msg: string) => {
    ElMessage({
      showClose: true,
      message: msg,
      type: 'error'
    })
  }
  const warning = (msg: string) => {
    ElMessage({
      showClose: true,
      message: msg,
      type: 'warning'
    })
  }
  return { success, error, warning }
}
