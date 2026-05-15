import { ref, onMounted, onUnmounted } from 'vue'

export function useNavbar() {
  const isScrolled = ref(false)
  const isMobileMenuOpen = ref(false)

  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  }

  const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  }

  const closeMobileMenu = () => {
    isMobileMenuOpen.value = false
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    isScrolled,
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu
  }
}