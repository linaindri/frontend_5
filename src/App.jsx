import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Landing from './Pages/Landing';
import State from './Pages/State';
import EventHandling from './Pages/EventHandling'

function App () {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/landingpage" Component={Landing}/>
        <Route path="/state" Component={State}/>
        <Route path="/eventhandling" Component={EventHandling}/>
      </Routes>
    </>
  )
}

export default App;
