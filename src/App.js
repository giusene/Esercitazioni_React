import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AddVAT from './pages/AddVAT';
import EsercizioUseReducer from './pages/EsercizioUseReducer';
import EsercizioUseFetch from './pages/EsercizioUseFetch';
import Draggable from './pages/Draggable';
import FormUseReducer from './pages/FormUseReducer';

import './App.css';

const menuState = [
  { label: 'addVat', link: '/addVat', date: '14-dic-21' },
  { label: 'useReducer', link: '/useReducer', date: '17-dic-21' },
  { label: 'useFetch', link: '/useFetch', date: '20-dic-21' },
  { label: 'Draggable', link: '/draggable', date: '22-dic-21' },
  { label: 'Form useReducer', link: '/form', date: '11-gen-21' }
]

function App() {
  return (
    <div className="App">
      <Header menuState={menuState} />

      <Routes>
        <Route path="/Esercitazioni_React" element={<Home />} />
        <Route path={menuState[0].link} element={<AddVAT value={100} vat={22} />} />
        <Route path={menuState[1].link} element={<EsercizioUseReducer />} />
        <Route path={menuState[2].link} element={<EsercizioUseFetch />} />
        <Route path={menuState[3].link} element={<Draggable />} />
        <Route path={menuState[4].link} element={<FormUseReducer />} />
      </Routes>

      
    </div>
  );
}

export default App;
