import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./inicio"; // Componente de inicio
import Papeles from "./Papeles";

const App = () => {
  return (
    <Router>
      <div>
        {/* Definimos las rutas */}
        <Routes>
          <Route path="/" element={<Inicio />} /> {/* Ruta para el inicio */}
          <Route path="/papeel" element={<Papeles />} /> {/* Ruta para el inicio */}

        </Routes>
      </div>
    </Router>
  );
};

export default App;
