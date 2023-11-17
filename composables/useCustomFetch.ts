export const useCustomFetch = async (fn: Function, ...args: any[]) => {
  const data = ref<Record<string, any>[] | null>(null)
  const error = ref<Error | null>(null)
  try {
    const res = await fn(...args)
    data.value = res
  } catch (e) {
    if (e instanceof Error) {
      error.value = e
    }
  }

  return { data, error }
}
