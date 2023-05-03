import './index.scss'
import { Sidebar } from '../Sidebar'
import { Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <Outlet />
      </div>
    </div>
  )
}
