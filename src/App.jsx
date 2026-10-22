import { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LazyMotion, MotionConfig, domAnimation } from 'motion/react'
import MainLayout from './components/layout/MainLayout.jsx'
import LoadingScreen from './components/common/LoadingScreen.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import './App.css'

// Home is part of the main bundle for a fast first paint; other pages load on demand.
const About = lazy(() => import('./pages/About.jsx'))
const Projects = lazy(() => import('./pages/Projects.jsx'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail.jsx'))
const Skills = lazy(() => import('./pages/Skills.jsx'))
const Experience = lazy(() => import('./pages/Experience.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'projects', element: <Projects /> },
      { path: 'projects/:slug', element: <ProjectDetail /> },
      { path: 'skills', element: <Skills /> },
      { path: 'experience', element: <Experience /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <LoadingScreen />
        <RouterProvider router={router} />
      </MotionConfig>
    </LazyMotion>
  )
}
