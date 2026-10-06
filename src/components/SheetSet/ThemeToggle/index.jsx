import './index.scss'
import { useEffect, useState } from 'react'

function getInitialTheme() {
  const current = document.documentElement.dataset.theme
  if (current === 'dark' || current === 'light') return current
  const prefersDark =
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefersDark ? 'dark' : 'light'
}

export function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme)
  const isDark = theme === 'dark'

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const toggle = () => {
    const next = isDark ? 'light' : 'dark'
    setTheme(next)
    try {
      localStorage.setItem('theme', next)
    } catch (e) {
      // Storage can be blocked. The toggle still works for this visit.
    }
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-pressed={isDark}
      aria-label={
        isDark
          ? 'Switch to paper (light) view'
          : 'Switch to blueprint (dark) view'
      }
    >
      <span className="theme-toggle-heading">VIEW</span>
      <span className="theme-toggle-row">
        <span className="theme-toggle-switch">
          <span className="theme-toggle-knob" />
        </span>
        <span>{isDark ? 'BLUEPRINT' : 'PAPER'}</span>
      </span>
    </button>
  )
}
