import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router'
import Layout from '@/components/layout/Layout'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import HomePage from '@/pages/HomePage'

const MenuPage = lazy(() => import('@/pages/MenuPage'))
const AboutPage = lazy(() => import('@/pages/AboutPage'))
const HoursPage = lazy(() => import('@/pages/HoursPage'))
const LocationPage = lazy(() => import('@/pages/LocationPage'))
const ContactPage = lazy(() => import('@/pages/ContactPage'))
const AdminLoginPage = lazy(() => import('@/pages/AdminLoginPage'))
const AdminPage = lazy(() => import('@/pages/AdminPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

function LazyWrapper({ children }) {
  return <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'menu', element: <LazyWrapper><MenuPage /></LazyWrapper> },
      { path: 'about', element: <LazyWrapper><AboutPage /></LazyWrapper> },
      { path: 'hours', element: <LazyWrapper><HoursPage /></LazyWrapper> },
      { path: 'location', element: <LazyWrapper><LocationPage /></LazyWrapper> },
      { path: 'contact', element: <LazyWrapper><ContactPage /></LazyWrapper> },
      { path: 'admin/login', element: <LazyWrapper><AdminLoginPage /></LazyWrapper> },
      { path: 'admin', element: <LazyWrapper><AdminPage /></LazyWrapper> },
      { path: '*', element: <LazyWrapper><NotFoundPage /></LazyWrapper> },
    ],
  },
])
