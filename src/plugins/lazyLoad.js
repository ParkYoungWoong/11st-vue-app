export default {
  install (Vue) {
    Vue.prototype.$lazyLoad = element => {
      element.classList.add('lazy-load-element')
      const io = new IntersectionObserver(entries => {
        entries.forEach(async entry => {
          if (!entry.isIntersecting) return

          element.classList.add('lazy-loaded')
        })
      })
      io.observe(element)
    }
  }
}
