import './index.scss'
import { Sidebar } from '../Sidebar'
import { Outlet } from 'react-router-dom'

export function Layout() {
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
