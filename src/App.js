import { Route, Routes } from 'react-router-dom';
import './App.css';
import Jugar from './components/Jugar';
import Login from './components/Login';
import Navigation from './components/Navigation';
import Question from './components/Question';
import ResultsFinal from './components/ResultsFinal';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route index path='/login' element={<Login />} />
        <Route path='/jugar' element={<Jugar />} />
        <Route path='/question' element={<Question />} />
        <Route path='/results-final' element={<ResultsFinal />} />
      </Routes>
    </>
  );
}

export default App;
