import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Header from './components/shared/header.tsx'
import Footer from './components/shared/footer.tsx'
const queryClient = new QueryClient();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Header />
     
      <main className='flex grow flex-col items-center'>
              
      </main>
      <Footer/>
      </BrowserRouter>
      </QueryClientProvider>
  </StrictMode>,
)
