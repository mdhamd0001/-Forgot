import { useState } from 'react'
import Navbar from './components/Navbar'
import Ui from './components/Ui'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-gradient-to-tl from-blue-900 via-blue-400 to-blue-900 h-screen'>
        <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
        <Route path="/" element={<Login/>} />
          <Route path="/home" element={<Ui />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
         
          

        </Routes>
        </BrowserRouter>
      
       </div>
    </>
  )
}

export default App
