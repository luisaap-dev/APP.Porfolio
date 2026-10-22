import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Education from './pages/Education'
import Contact from './pages/Contact'
import RemoteSupport from './pages/RemoteSupport'
import NotFound from './pages/NotFound'
import { routeSlugs } from './utils/routes'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={routeSlugs.projects.es} element={<Projects />} />
        <Route path={routeSlugs.projects.en} element={<Projects />} />
        <Route path={routeSlugs.projects.gl} element={<Projects />} />
        <Route path={routeSlugs.experience.es} element={<Experience />} />
        <Route path={routeSlugs.experience.en} element={<Experience />} />
        <Route path={routeSlugs.education.es} element={<Education />} />
        <Route path={routeSlugs.education.en} element={<Education />} />
        <Route path={routeSlugs.remoteSupport.es} element={<RemoteSupport />} />
        <Route path={routeSlugs.remoteSupport.en} element={<RemoteSupport />} />
        <Route path={routeSlugs.contact.es} element={<Contact />} />
        <Route path={routeSlugs.contact.en} element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
