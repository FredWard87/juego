import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // Importar framer-motion
import fondoTitulo from './assets/FONDOTÍTULO.png';
import titulo from './assets/TÍTULO.png';
import botonJugar from './assets/BOTÓNJUGAR.png';
import pregunta1 from './assets/PREGUNTA1.png';
import pregunta2 from './assets/PREGUNTA2.png';
import pregunta3 from './assets/PREGUNTA3.png';
import './boton.css';

const Inicio = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    // Animación de transición a la ruta '/papeel'
    navigate('/papeel');
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: '-100%' }} // Inicio con opacidad 0 y desplazamiento a la izquierda
      animate={{ opacity: 1, x: 0 }} // Animación final con opacidad 1 y desplazamiento a su lugar
      exit={{ opacity: 0, x: '100%' }} // Cuando se sale, opacidad 0 y desplazamiento a la derecha
      transition={{ duration: 1, ease: 'easeInOut' }} // Tiempo de duración y tipo de transición
      style={styles.container}
    >
      {/* Fondo del título */}
      <img src={fondoTitulo} alt="Fondo del título" style={styles.fondoPagina} />

      {/* Contenido */}
      <div style={styles.contenido}>
        <img src={titulo} alt="Título" style={styles.titulo} />

        {/* Preguntas */}
        <img src={pregunta1} alt="¿Qué información encontrarás?" style={styles.pregunta1} />
        <img src={pregunta2} alt="¿Podrás descifrarlo?" style={styles.pregunta2} />
        <img src={pregunta3} alt="¡No le cuentes a nadie!" style={styles.pregunta3} />

        {/* Botón Jugar */}
        <img
          src={botonJugar}
          alt="JUGAR"
          className="botonJugar"
          onClick={handleStart}
        />
      </div>
    </motion.div>
  );
};

const styles = {
  container: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
  },

  fondoPagina: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 1,
  },

  contenido: {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    color: '#fff',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  titulo: {
    width: '50%',
    marginBottom: '20px',
  },

  pregunta1: {
    position: 'absolute',
    top: '10%',
    left: '5%',
    width: '20%',
  },
  pregunta2: {
    position: 'absolute',
    top: '20%',
    right: '5%',
    width: '28%',
  },
  pregunta3: {
    position: 'absolute',
    bottom: '10%',
    left: '5%',
    width: '20%',
  },

  botonJugar: {
    position: 'absolute',
    bottom: '15%',
    width: '30%',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.2s ease',
    // Hover efecto (Zoom)
    ':hover': {
      transform: 'scale(1.1)', // Incremento de 10%
      boxShadow: '0 5px 15px rgba(255, 0, 0, 0.6)', // Sombra llamativa
    },
    // Active efecto (Presionado)
    ':active': {
      transform: 'scale(0.9)', // Disminución del tamaño
      boxShadow: '0 3px 8px rgba(255, 0, 0, 0.5)', // Sombra más pequeña
    },
  },
};

export default Inicio;
