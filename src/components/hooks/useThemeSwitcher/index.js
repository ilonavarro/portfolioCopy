import { useEffect, useState } from 'react'

export default function useThemeSwitcher() {
  const preferDarkQuery = '(prefers-color-scheme: dark)'
  const [mode, setMode] = useState('')

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery)
    const userPref = window.localStorage.getItem('theme')

    const handleChange = () => {
      let check = userPref
        ? userPref === 'dark'
          ? 'dark'
          : 'light'
        : mediaQuery.matches
        ? 'dark'
        : 'light'
      setMode(check)
      check === 'dark'
        ? document.documentElement.classList.add('dark')
        : document.documentElement.classList.remove('dark')

      /*
      if (userPref) {
        let check = userPref === 'dark' ? 'dark' : 'light'
        setMode(check)
        check === 'dark'
          ? document.documentElement.classList.add('dark')
          : document.documentElement.classList.remove('dark')
      } else {
        let check = mediaQuery.matches ? 'dark' : 'light'
      }
      */
    }

    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    // fazendo
  }, [mode])

  return <div>useThemeSwitcher</div>
}
