import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Jugar from './components/Jugar';
import Login from './components/Login';
import Navigation from './components/Navigation';
import Question from './components/Question';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/jugar' element={<Jugar />} />
        <Route path='/question' element={<Question />} />
      </Routes>
    </>
  );
}

export default App;
