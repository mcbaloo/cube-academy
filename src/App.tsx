import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/header'
const queryClient = new QueryClient();

function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Header />
     
      <main className='flex grow flex-col items-center'>
              
      </main>
      </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}

export default App
