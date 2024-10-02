import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/shared/footer'
import Header from './components/shared/header'
import Login from './layouts/account/login'
import Home from './layouts/home'
import Nomination from './layouts/nominations/nomination'
const queryClient = new QueryClient();
function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>  
    
      <Routes>
           <Route path="/nominations" element={<Nomination />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            </Routes>             
      
      <Footer/>
      </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}

export default App
