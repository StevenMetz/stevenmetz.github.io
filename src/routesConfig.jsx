import { About } from './components/About'
import { Contact } from './components/Contact'
import { Portfolio } from './components/Portfolio'

// Pre-redesign pages. They render inside the old sidebar Layout.
const routes = [
  { key: 'about', path: '/about', element: About },
  { key: 'contact', path: '/contact', element: Contact },
  { key: 'portfolio', path: '/portfolio', element: Portfolio },
]

export default routes
