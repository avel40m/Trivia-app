import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Jugar from './components/Jugar';
import Login from './components/Login';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/jugar' element={<Jugar />} />
      </Routes>
    </>
  );
}

export default App;
