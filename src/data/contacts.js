import { personalData } from './personal.js'

export const contactLinks = [
  {
    id: 'email',
    icon: 'fa-solid fa-envelope',
    label: 'Email',
    value: personalData.email,
    href: `mailto:${personalData.email}`
  },
  {
    id: 'linkedin',
    icon: 'fa-brands fa-linkedin',
    label: 'LinkedIn',
    value: personalData.linkedin,
    href: `https://${personalData.linkedin}`
  },
  {
    id: 'github',
    icon: 'fa-brands fa-github',
    label: 'GitHub',
    value: personalData.github,
    href: `https://${personalData.github}`
  }
]