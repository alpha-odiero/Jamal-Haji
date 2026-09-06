import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'

// Code-split non-critical pages so the initial bundle stays small.
const About = lazy(() => import('./pages/About'))
const Projects = lazy(() => import('./pages/Projects'))
const ProjectDetails = lazy(() => import('./pages/ProjectDetails'))
const Services = lazy(() => import('./pages/Services'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

function PageFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center" aria-label="Loading page">
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-ink/20 border-t-accent" />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            <Suspense fallback={<PageFallback />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<PageFallback />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/projects"
          element={
            <Suspense fallback={<PageFallback />}>
              <Projects />
            </Suspense>
          }
        />
        <Route
          path="/projects/:slug"
          element={
            <Suspense fallback={<PageFallback />}>
              <ProjectDetails />
            </Suspense>
          }
        />
        <Route
          path="/services"
          element={
            <Suspense fallback={<PageFallback />}>
              <Services />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<PageFallback />}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<PageFallback />}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}