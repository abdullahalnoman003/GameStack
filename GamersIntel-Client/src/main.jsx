import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './routes/router'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import AuthProvider from './Context/AuthProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      <Toaster 
        position="top-center"
        reverseOrder={true}
        toastOptions={{
          duration: 3000,
          style: {
            background: '#1f2937',
            color: '#fff',
            border: '1px solid rgba(147, 51, 234, 0.3)',
          },
          success: {
            iconTheme: {
              primary: '#a855f7',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ec4899',
              secondary: '#fff',
            },
          },
        }}
      />
    </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
)
