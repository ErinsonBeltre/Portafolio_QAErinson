import { personalData } from './personal.js'

function displayUrl(url) {
  return url.replace(/^https?:\/\//i, '').replace(/\/$/, '')
}

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
    value: displayUrl(personalData.linkedin),
    href: personalData.linkedin
  },
  {
    id: 'github',
    icon: 'fa-brands fa-github',
    label: 'GitHub',
    value: displayUrl(personalData.github),
    href: personalData.github
  }
]
