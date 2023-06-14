import { useState } from 'react'

export default function useThemeSwitcher() {
  const preferDarkQuery = '(prefers-color-scheme: dark)'
  const [mode, setMode] = useState('')

  return <div>useThemeSwitcher</div>
}
