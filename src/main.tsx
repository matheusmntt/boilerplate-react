import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { Providers } from '@/providers'
import { router } from '@/router'

import '@/css/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <RouterProvider router={router} />,
    </Providers>
  </React.StrictMode>,
)
