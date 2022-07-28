import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Rocket from './components/Rocket';
import Mission from './components/Mission';
import Profile from './components/Profile';

const App = () => (
  <>

    <NavBar />
    <Routes>
      <Route exact path="/" element={<Rocket />} />
      <Route path="/missions" element={<Mission />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>

  </>
);

export default App;
