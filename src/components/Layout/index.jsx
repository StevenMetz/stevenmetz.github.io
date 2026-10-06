import './index.scss'
import { Sidebar } from '../Sidebar'
import { Outlet } from 'react-router-dom'
import { useLayoutEffect } from 'react'

export function Layout() {
  // Scopes the old global page styles (see index.css) to these routes.
  useLayoutEffect(() => {
    document.documentElement.classList.add('legacy-site')
    return () => document.documentElement.classList.remove('legacy-site')
  }, [])

  return (
    <div className="App">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Sidebar />
      <div className="page" id="main-content">
        <Outlet />
      </div>
    </div>
  )
}
