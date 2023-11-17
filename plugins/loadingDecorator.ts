export default defineNuxtPlugin(() => {
  /**
   * element plus loading封裝
   * @returns loading 實例
   */
  const loading = () => {
    const loadingInstance = ElLoading.service({
      lock: true,
      text: 'Loading...',
      background: 'rgba(0, 0, 0, 0.7)'
    })
    return loadingInstance
  }

  /**
   * loading裝飾器
   * @param {Function} fn - 需要loading的方法
   * @param {string[]} arg - 方法的參數
   */
  const loadingDecorator = async (fn: Function, ...arg: any[]) => {
    loading()
    const result = await fn(...arg)
    setTimeout(() => {
      loading().close()
    }, 1000)
    return result
  }

  return {
    provide: {
      loadingDecorator
    }
  }
})
