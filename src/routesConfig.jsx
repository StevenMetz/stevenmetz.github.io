import { Home } from './components/Home'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Portfolio } from './components/Portfolio'

const routes = [
  { key: 'home', index: true, element: Home },
  { key: 'about', path: '/about', element: About },
  { key: 'contact', path: '/contact', element: Contact },
  { key: 'portfolio', path: '/portfolio', element: Portfolio },
]

export default routes
