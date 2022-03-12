import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='signin' element={<Signin />} />
      <Route path='signup' element={<Signup />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
