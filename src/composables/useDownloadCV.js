import { personalData } from '@/data/personal.js'

export function useDownloadCV() {
  const downloadCV = () => {
    const link = document.createElement('a')
    link.href = personalData.cvPath
    link.download = `CV_${personalData.name.replace(/\s+/g, '_')}_QA.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return { downloadCV }
}