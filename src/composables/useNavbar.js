import { ref, watch, onMounted, onUnmounted } from 'vue'

const MOBILE_MAX_WIDTH = 900

export function useNavbar() {
  const isScrolled = ref(false)
  const isMobileMenuOpen = ref(false)

  const isMobileViewport = () => window.innerWidth <= MOBILE_MAX_WIDTH

  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  }

  const syncBodyScroll = () => {
    const lockScroll = isMobileMenuOpen.value && isMobileViewport()
    document.body.classList.toggle('nav-menu-open', lockScroll)
  }

  const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  }

  const closeMobileMenu = () => {
    isMobileMenuOpen.value = false
  }

  const handleKeydown = (event) => {
    if (event.key === 'Escape' && isMobileMenuOpen.value && isMobileViewport()) {
      closeMobileMenu()
    }
  }

  const handleResize = () => {
    if (!isMobileViewport() && isMobileMenuOpen.value) {
      isMobileMenuOpen.value = false
    }
    syncBodyScroll()
  }

  watch(isMobileMenuOpen, syncBodyScroll)

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('keydown', handleKeydown)
    window.addEventListener('resize', handleResize)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('keydown', handleKeydown)
    window.removeEventListener('resize', handleResize)
    document.body.classList.remove('nav-menu-open')
  })

  return {
    isScrolled,
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu
  }
}
