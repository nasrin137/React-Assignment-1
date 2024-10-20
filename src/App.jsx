
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Shared/Navbar'
import Dashboard from './Pages/Dashboard/Dashboard'
import Incidents from './Pages/Incidents/Incidents'
import Locations from './Pages/Locations/Locations'
import StartPage from './Pages/Incidents/StartPage'
import NewIncident from './Pages/Incidents/NewIncident'
import IncidentsDescription from './Pages/Incidents/IncidentsDescription'
import IncidentFinished from './Pages/Incidents/IncidentFinished'
import ErrorPage from './Components/Shared/ErrorPage'

function App() {
  

  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Dashboard></Dashboard>} /> 
      <Route path="/incidents" element={<Incidents></Incidents>} /> 
      <Route path='/startPage' element={<StartPage></StartPage>}></Route>
      <Route path='newIncident' element={<NewIncident></NewIncident>}></Route>
      <Route path='/incidentDescription' element={<IncidentsDescription></IncidentsDescription>}></Route>
      <Route path='/finished' element={<IncidentFinished></IncidentFinished>}></Route>
      <Route path="/locations" element={<Locations></Locations>} /> 
      <Route path="/errorPage" element={<ErrorPage></ErrorPage>} /> 
      <Route path="/errorPage" element={<ErrorPage></ErrorPage>} /> 
      <Route path="/errorPage" element={<ErrorPage></ErrorPage>} /> 
      
    </Routes>
  </BrowserRouter>
  )
}

export default App
