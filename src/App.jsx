
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Shared/Navbar'
import Dashboard from './Pages/Dashboard/Dashboard'
import Incidents from './Pages/Incidents/Incidents'

function App() {
  

  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Dashboard></Dashboard>} /> 
      <Route path="/incidents" element={<Incidents></Incidents>} /> 
    </Routes>
  </BrowserRouter>
  )
}

export default App
