import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Labor from './components/Labor';
import Material from './components/Material';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/labor" element={<Labor />} />
          <Route path="/material" element={<Material />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
