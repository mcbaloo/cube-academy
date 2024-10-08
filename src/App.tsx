import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/shared/footer'
import Login from './layouts/account/login'
import Home from './layouts/home'
import Nomination from './layouts/nominations/nomination'
import NomineeSelection from './layouts/nominations/create'
import NominationSuccess from './layouts/nominations/nomination-sucess'
import ProtectedRoute from './components/shared/protected-route'
const queryClient = new QueryClient();
function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>  
    
      <Routes>
      <Route element={<ProtectedRoute />}>
      <Route path='/nomination-success' element={<NominationSuccess />} />
           <Route path='/create-nomination' element={<NomineeSelection />} />
           <Route path="/nominations" element={<Nomination />} />
        </Route>
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
