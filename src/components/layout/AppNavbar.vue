<template>
  <nav :class="['navbar', { scrolled: isScrolled }]" role="navigation" aria-label="Navegación principal">
    <div class="nav-container">
      <a href="#" class="nav-logo" aria-label="Ir al inicio">
        <i class="fa-solid fa-bug" aria-hidden="true"></i>
        <span>{{ personal.name.split(' ')[0] }}</span>
      </a>

      <button
        :class="['hamburger', { active: isMobileMenuOpen }]"
        @click="toggleMobileMenu"
        :aria-expanded="isMobileMenuOpen"
        aria-label="Abrir menú de navegación"
        aria-controls="navLinks"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul
        id="navLinks"
        :class="['nav-links', { active: isMobileMenuOpen }]"
        role="menubar"
      >
        <li v-for="item in navItems" :key="item.id" role="none">
          <a
            :href="item.href"
            :class="{ 'btn-contacto': item.isCTA }"
            role="menuitem"
            @click="closeMobileMenu"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { useNavbar } from '@/composables/useNavbar.js'
import { personalData } from '@/data/personal.js'

const personal = personalData
const { isScrolled, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useNavbar()

const navItems = [
  { id: 'about', label: 'Sobre mí', href: '#about', isCTA: false },
  { id: 'skills', label: 'Skills', href: '#skills', isCTA: false },
  { id: 'projects', label: 'Proyectos', href: '#projects', isCTA: false },
  { id: 'experience', label: 'Experiencia', href: '#experience', isCTA: false },
  { id: 'certifications', label: 'Certificaciones', href: '#certifications', isCTA: false },
  { id: 'contact', label: 'Contáctame', href: '#contact', isCTA: true }
]
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  z-index: 1000;
  padding: 0 var(--spacing-lg);
  transition: var(--transition-base);
  height: var(--navbar-height);
}

.navbar.scrolled {
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
}

.nav-container {
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.nav-logo {
  font-weight: 700;
  font-size: 1.4rem;
  color: var(--color-primary);
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
}

.nav-logo i {
  font-size: 1.6rem;
}

.nav-links {
  display: flex;
  gap: var(--spacing-lg);
  align-items: center;
}

.nav-links a {
  color: var(--color-dark);
  font-weight: 500;
  font-size: var(--font-size-base);
  transition: var(--transition-base);
  position: relative;
  padding: 0.3rem 0;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-primary);
  transition: var(--transition-base);
  border-radius: 2px;
}

.nav-links a:hover,
.nav-links a:focus {
  color: var(--color-primary);
}

.nav-links a:hover::after,
.nav-links a:focus::after {
  width: 100%;
}

.btn-contacto {
  background: var(--color-primary) !important;
  color: var(--color-white) !important;
  padding: 0.6rem 1.4rem !important;
  border-radius: var(--radius-lg);
  font-weight: 600 !important;
}

.btn-contacto:hover {
  background: var(--color-primary-dark) !important;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(108, 92, 231, 0.3);
}

.btn-contacto::after {
  display: none !important;
}

.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;
  z-index: 1001;
  background: none;
  border: none;
  padding: 4px;
}

.hamburger span {
  width: 26px;
  height: 3px;
  background: var(--color-dark);
  border-radius: 3px;
  transition: var(--transition-base);
}

@media (max-width: 900px) {
  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 280px;
    height: 100vh;
    background: var(--color-white);
    flex-direction: column;
    padding: 6rem var(--spacing-lg) var(--spacing-lg);
    transition: var(--transition-base);
    box-shadow: -10px 0 40px rgba(0, 0, 0, 0.1);
    gap: var(--spacing-md);
  }

  .nav-links.active {
    right: 0;
  }

  .hamburger {
    display: flex;
  }

  .hamburger.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 6px);
  }
  .hamburger.active span:nth-child(2) {
    opacity: 0;
  }
  .hamburger.active span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -6px);
  }

  .btn-contacto {
    display: inline-block !important;
    text-align: center;
    margin-top: var(--spacing-sm);
  }
}
</style>