import './App.scss'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { SheetSet } from './components/SheetSet'
import { NotePage } from './components/NotePage'
import routes from './routesConfig'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SheetSet />} />
        <Route path="/notes/:slug" element={<NotePage />} />
        <Route element={<Layout />}>
          {routes.map(({ key, path, element: Component }) => (
            <Route key={key} path={path} element={<Component />} />
          ))}
        </Route>
      </Routes>
    </>
  )
}

export default App
