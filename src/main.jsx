import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/scss/style.scss'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './pages/MainLayout'
import Error from './pages/Error'
import Home from './pages/Home'
import About from './pages/About'
import Payment from './pages/Payment'
import Assets from './pages/Assets'
import Overview from './pages/Overview'

const router = createBrowserRouter([
  {
    path:'/',
    element: <MainLayout />,
    errorElement: <Error />,
    children:[
      {
        path:'/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path:'/payment',
        element:<Payment />
      },
      {
        path:'/assets',
        element:<Assets />
      },
      {
        path:'/overview',
        element:<Overview />
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
