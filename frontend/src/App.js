import './App.css';
import Navbar from './components/Navbar';
import CountrySelection from './pages/CountrySelection';
import MakeProfile from './pages/MakeProfile';
import PreviewProfile from './pages/PreviewProfile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import SignUpMenu from './pages/SignUpMenu';
import SignUpQuestion1 from './pages/SignUpQuestion1';
import SignUpQuuestion from './pages/SignUpQuuestion';
import SuccessSignUp from './pages/SuccessSignUp';
import WelcomeHomePage from './pages/WelcomeHomePage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route  path="/" element={<WelcomeHomePage />} />

      <Route  path="/signUpMenu" element={<SignUpMenu />} />
      <Route  path="/signUp" element={<SignUp />} />
      <Route  path="/signIn" element={<SignIn />} />
      <Route  path="/select-country" element={<CountrySelection />} />

      <Route  path="/tell-us" element={<SignUpQuuestion />} />
      <Route  path="/tell-about-yourself" element={<SignUpQuestion1 />} />
      <Route  path="/addProfile" element={<MakeProfile />} />
      <Route  path="/previewProfile" element={<PreviewProfile />} />

      <Route  path="/success" element={<SuccessSignUp />} />
      </Routes>
    </div>
  );
}

export default App;
