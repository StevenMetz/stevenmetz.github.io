import './App.scss'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import routes from './routesConfig'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map(({ key, path, element: Component, index }) =>
            index ? (
              <Route key={key} index element={<Component />} />
            ) : (
              <Route key={key} path={path} element={<Component />} />
            )
          )}
        </Route>
      </Routes>
    </>
  )
}

export default App
