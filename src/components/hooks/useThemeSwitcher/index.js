import { useEffect, useState } from 'react'

export default function useThemeSwitcher() {
  const preferDarkQuery = '(prefers-color-scheme: dark)'
  const [mode, setMode] = useState('')

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery)
    const userPref = window.localStorage.getItem('theme')

    const handleChange = () => {
      if (userPref) {
        let check = userPref === 'dark' ? 'dark' : 'light'
        setMode(check)
      }
    }

    mediaQuery.addEventListener('change', handleChange)
  }, [])

  return <div>useThemeSwitcher</div>
}
