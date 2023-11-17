export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('color', (el, binding) => {
    el.style = `color:${binding.value || 'red'};font-size:12px`
  })
})
