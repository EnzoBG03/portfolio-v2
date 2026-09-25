import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Moi from './pages/Moi';
import Etudes from './pages/Etudes';
import Competences from './pages/Competences';
import Experience from './pages/Experience';
import Projets from './pages/Projets';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/moi" element={<Moi />} />
        <Route path="/etudes" element={<Etudes />} />
        <Route path="/competences" element={<Competences />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
