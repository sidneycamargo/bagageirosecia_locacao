import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Small timeout to allow destination elements to mount
      const timer = setTimeout(() => {
        const id = hash.replace('#', '')
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 50)
      return () => clearTimeout(timer)
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
    }
  }, [pathname, hash])

  return null
}
