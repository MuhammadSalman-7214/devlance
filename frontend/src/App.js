import './App.css';
import Navbar from './components/Navbar';
import WelcomeHomePage from './pages/WelcomeHomePage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route  path="/" element={<WelcomeHomePage />} />
      </Routes>
    </div>
  );
}

export default App;
