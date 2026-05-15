import { onMounted, onUnmounted } from 'vue'

export function useScrollReveal(elementRef, options = {}) {
  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const mergedOptions = { ...defaultOptions, ...options }

  let observer = null

  const revealCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      }
    })
  }

  onMounted(() => {
    if (!elementRef.value) return

    observer = new IntersectionObserver(revealCallback, mergedOptions)
    observer.observe(elementRef.value)
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })
}