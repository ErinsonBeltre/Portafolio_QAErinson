import { ref, onMounted } from 'vue'
import { personalData } from '@/data/personal.js'

async function cvFileExists() {
  try {
    let response = await fetch(personalData.cvPath, { method: 'HEAD', cache: 'no-store' })

    if (response.status === 405 || response.status === 501) {
      response = await fetch(personalData.cvPath, { method: 'GET', cache: 'no-store' })
    }

    if (!response.ok) return false

    const contentType = response.headers.get('content-type') || ''
    return !contentType.includes('text/html')
  } catch {
    return false
  }
}

export function useDownloadCV() {
  const cvAvailable = ref(false)

  const downloadCV = async () => {
    const exists = await cvFileExists()
    cvAvailable.value = exists
    if (!exists) return

    const link = document.createElement('a')
    link.href = personalData.cvPath
    link.download = `CV_${personalData.name.replace(/\s+/g, '_')}_QA.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  onMounted(async () => {
    cvAvailable.value = await cvFileExists()
  })

  return { downloadCV, cvAvailable }
}
