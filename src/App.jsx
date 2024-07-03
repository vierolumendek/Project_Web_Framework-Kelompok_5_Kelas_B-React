import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage'
import Yolo from './pages/yolo';
import ShakenCo from './pages/shakenCo';
import Keki from './pages/keki';
import Gultik from './pages/gultik';
import Daengcu from './pages/daengcu'
import Yuhu from './pages/yuhu';
import Dehoki from './pages/dehoki';
import KetanMantan from './pages/ketanMantan';
import Login from './pages/login';
import SignUp from './pages/signUp';
import LoginToko from './pages/loginToko';
import SignUpToko from './pages/signUpToko';
import Akun from './pages/akun';
import AkunToko from './pages/akunToko';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/yolo" element={<Yolo />} />
          <Route path="/shakenCo" element={<ShakenCo />} />
          <Route path="/keki" element={<Keki />} />
          <Route path="/gultik" element={<Gultik />} />
          <Route path="/daengcu" element={<Daengcu />} />
          <Route path="/yuhu" element={<Yuhu />} />
          <Route path="/dehoki" element={<Dehoki />} />
          <Route path="/ketanMantan" element={<KetanMantan />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginToko" element={<LoginToko />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signUpToko" element={<SignUpToko />} />
          <Route path="/Akun" element={<Akun />} />
          <Route path="/AkunToko" element={<AkunToko />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
