import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AddVAT from './pages/AddVAT';
import EsercizioUseReducer from './pages/EsercizioUseReducer';
import EsercizioUseFetch from './pages/EsercizioUseFetch';

import './App.css';

const menuState = [
  { label: 'addVat', link: '/addVat', date: '14-dic-21' },
  { label: 'useReducer', link: '/useReducer', date: '17-dic-21' },
  { label: 'useFetch', link: '/useFetch', date: '20-dic-21' }
]

function App() {
  return (
    <div className="App">
      <Header menuState={menuState} />

      <Routes>
        <Route path="/Esercitazioni_React" element={<Home />} />
        <Route path="/addVat" element={<AddVAT value={100} vat={22} />} />
        <Route path="/useReducer" element={<EsercizioUseReducer />} />
        <Route path="/useFetch" element={<EsercizioUseFetch />} />
      </Routes>

      
    </div>
  );
}

export default App;
