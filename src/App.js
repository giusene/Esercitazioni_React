import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import EsercizioUseReducer from './pages/EsercizioUseReducer';
import EsercizioUseFetch from './pages/EsercizioUseFetch';


import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/useReducer" element={<EsercizioUseReducer />} />
        <Route path="/useFetch" element={<EsercizioUseFetch />} />
      </Routes>

      
    </div>
  );
}

export default App;
