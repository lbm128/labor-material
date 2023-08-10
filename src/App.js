import './App.css';
import { useState, createContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Labor from './components/Labor';
import Material from './components/Material';

export const TotalsContext = createContext();

function App() {
  const [totals, setTotals] = useState({ laborTotal: 0, materialTotal: 0});

  return (
    <div className="App">
      <TotalsContext.Provider value={[totals, setTotals]}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/labor" element={<Labor />} />
            <Route path="/material" element={<Material />} />
          </Routes>
        </Router>
      </TotalsContext.Provider>
    </div>
  );
}

export default App;
