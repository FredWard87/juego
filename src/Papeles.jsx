// Papeles.jsx
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Papeles.css";
import victoriaImg from "./assetsJuego/cargana.png";


// Importa las imágenes de papeles
import papel1 from "./assetsJuego/PAPEL1.png";
import papel2 from "./assetsJuego/PAPEL 2.png";
import papel3 from "./assetsJuego/PAPEL 3.png";
import papel4 from "./assetsJuego/PAPEL 4.png";
import papel5 from "./assetsJuego/PAPEL 5.png";
import fondoTitulo from "./assets/FONDOTÍTULO.png"

// Importa las imágenes de cuadros
import cuadro1 from "./assetsJuego/1.png";
import cuadro2 from "./assetsJuego/2.png";
import cuadro3 from "./assetsJuego/3.png";
import cuadro4 from "./assetsJuego/4.png";
import cuadro5 from "./assetsJuego/5.png";
import cuadro6 from "./assetsJuego/6.png";
import cuadro7 from "./assetsJuego/7.png";
import cuadro8 from "./assetsJuego/8.png";
import cuadro9 from "./assetsJuego/9.png";
import cuadro10 from "./assetsJuego/10.png";
import cuadro11 from "./assetsJuego/11.png";
import cuadro12 from "./assetsJuego/12.png";
import cuadro13 from "./assetsJuego/13.png";
import cuadro14 from "./assetsJuego/14.png";

// Importa las imágenes decorativas
import foto1 from "./assetsJuego/FOTO 1.png";
import foto2 from "./assetsJuego/FOTO 2.png";
import foto3 from "./assetsJuego/FOTO 3.png";
import foto4 from "./assetsJuego/FOTO 4.png";
import foto5 from "./assetsJuego/FOTO 5.png";
import artistico from "./assetsJuego/artístico.png";
import construccion from "./assetsJuego/construcción.png";
import disenoGrafico from "./assetsJuego/diseño gráfico.png";
import formasGeometricas from "./assetsJuego/formas geométricas.png";
import funcionalidad from "./assetsJuego/funcionalidad.png";
import herramientaPropaganda from "./assetsJuego/herramienta.png";
import movimiento from "./assetsJuego/movimiento.png";

// Importa las letras del alfabeto ruso
import letra1 from "./assetsJuego/letra1.png";
import letra2 from "./assetsJuego/letra2.png";
import letra3 from "./assetsJuego/letra3.png";
import letra4 from "./assetsJuego/letra4.png";
import letra5 from "./assetsJuego/letra5.png";
import letra6 from "./assetsJuego/letra6.png";
import letra7 from "./assetsJuego/letra7.png";
import letra8 from "./assetsJuego/letra8.png";
import letra9 from "./assetsJuego/letra9.png";
import letra10 from "./assetsJuego/letra10.png";
import letra11 from "./assetsJuego/letra11.png";
import letra12 from "./assetsJuego/letra12.png";
import letra13 from "./assetsJuego/letra13.png";
import letra14 from "./assetsJuego/letra14.png";

// Definir todas las letras disponibles
const allLetters = [
  { id: 'letra1', src: letra1, alt: 'Letra 1' },
  { id: 'letra2', src: letra2, alt: 'Letra 2' },
  { id: 'letra3', src: letra3, alt: 'Letra 3' },
  { id: 'letra4', src: letra4, alt: 'Letra 4' },
  { id: 'letra5', src: letra5, alt: 'Letra 5' },
  { id: 'letra6', src: letra6, alt: 'Letra 6' },
  { id: 'letra7', src: letra7, alt: 'Letra 7' },
  { id: 'letra8', src: letra8, alt: 'Letra 8' },
  { id: 'letra9', src: letra9, alt: 'Letra 9' },
  { id: 'letra10', src: letra10, alt: 'Letra 10' },
  { id: 'letra11', src: letra11, alt: 'Letra 11' },
  { id: 'letra12', src: letra12, alt: 'Letra 12' },
  { id: 'letra13', src: letra13, alt: 'Letra 13' },
  { id: 'letra14', src: letra14, alt: 'Letra 14' },
];

const Papeles = () => {
  // Estado para los cuadros (mantener diseño existente)
  const [letters, setLetters] = useState(Array(14).fill(null));
  

  // Estado para asignar imágenes a papeles
  const [assignedImages, setAssignedImages] = useState({
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
  });

  // Estado para posicionar decorative-images
  const [decorativePosition, setDecorativePosition] = useState({ top: 0, left: 0 });

  // Estado para gestionar las letras del alfabeto ruso
  const [lettersAvailable, setLettersAvailable] = useState([...allLetters]);

  const [lettersDisplayed, setLettersDisplayed] = useState([]); // Array para letras mostradas

  const [showVictoryImage, setShowVictoryImage] = useState(false);
  const navigate = useNavigate();

  // Estado para determinar qué papeles asignarán 2 letras
  const [papelesWithTwoLetters, setPapelesWithTwoLetters] = useState([]);

  // Referencias a papeles y contenedor
  const containerRef = useRef(null);
  const papelRefs = useRef({}); // Define papelRefs aquí

  // Arrays de imágenes
  const cuadrosImages = [
    cuadro1, cuadro2, cuadro3, cuadro4, cuadro5, cuadro6,
    cuadro7, cuadro8, cuadro9, cuadro10, cuadro11, cuadro12,
    cuadro13, cuadro14,
  ];

  const papeles = [
    { id: 1, src: papel1, alt: 'Papel 1' },
    { id: 2, src: papel2, alt: 'Papel 2' },
    { id: 3, src: papel3, alt: 'Papel 3' },
    { id: 4, src: papel4, alt: 'Papel 4' },
    { id: 5, src: papel5, alt: 'Papel 5' },
  ];

  // Definición de las imágenes decorativas con sus asignaciones
  const images = [
    // Fotos
    { id: 'foto1', src: foto1, alt: 'Foto 1', correctPapelId: 1 },
    { id: 'foto2', src: foto2, alt: 'Foto 2', correctPapelId: 2 },
    { id: 'foto3', src: foto3, alt: 'Foto 3', correctPapelId: 3 },
    { id: 'foto4', src: foto4, alt: 'Foto 4', correctPapelId: 4 },
    { id: 'foto5', src: foto5, alt: 'Foto 5', correctPapelId: 5 },
    
    // Imágenes adicionales
    { id: 'artistico', src: artistico, alt: 'Artístico', correctPapelId: 1 },
    { id: 'movimiento', src: movimiento, alt: 'Movimiento', correctPapelId: 1 },
    { id: 'formasGeometricas', src: formasGeometricas, alt: 'Formas Geométricas', correctPapelId: 2 },
    { id: 'funcionalidad', src: funcionalidad, alt: 'Funcionalidad', correctPapelId: 2 },
    { id: 'herramientaPropaganda', src: herramientaPropaganda, alt: 'Herramienta de Propaganda', correctPapelId: 3 },
    { id: 'disenoGrafico', src: disenoGrafico, alt: 'Diseño Gráfico', correctPapelId: 4 },
    { id: 'construccion', src: construccion, alt: 'Construcción', correctPapelId: 5 },
  ];

  // Variantes para la animación de las imágenes decorativas
  const decorativeVariants = {
    initial: { opacity: 1, scale: 1, x: 0, y: 0 },
    animate: (custom) => ({
      x: custom.dispersionX,
      y: custom.dispersionY,
      transition: { duration: 1, delay: custom.delay },
    }),
  };

  // Obtener la posición de papel3 y calcular la nueva posición para las decorativas
  useEffect(() => {
    const updateDecorativePosition = () => {
      if (containerRef.current && papelRefs.current[3]) { // Usando papelRefs
        const containerRect = containerRef.current.getBoundingClientRect();
        const papel3Rect = papelRefs.current[3].getBoundingClientRect();

        // Calcular el centro de papel3 relativo al contenedor
        const papel3CenterY = papel3Rect.top - containerRect.top + papel3Rect.height / 2;
        const papel3CenterX = papel3Rect.left - containerRect.left + papel3Rect.width / 2;

        // Calcular el desplazamiento adicional del 20% de la altura del contenedor hacia arriba
        const additionalDispersionY = -containerRect.height * 0.2; // Ajusta el porcentaje según necesidad

        // Establecer la nueva posición para las decorativas
        setDecorativePosition({
          top: papel3CenterY + additionalDispersionY,
          left: papel3CenterX,
        });
      }
    };

    // Seleccionar aleatoriamente 2 papeles que asignarán 2 letras
    const selectPapelesWithTwoLetters = () => {
      const papelIds = papeles.map(papel => papel.id);
      const shuffled = [...papelIds].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 2);
      setPapelesWithTwoLetters(selected);
    };

    // Ejecutar al montar el componente
    selectPapelesWithTwoLetters();
    updateDecorativePosition();
    window.addEventListener("resize", updateDecorativePosition);

    // Limpiar el listener al desmontar
    return () => {
      window.removeEventListener("resize", updateDecorativePosition);
    };
  }, [papeles]);

  // Función para manejar el drop en cuadros
  const handleDropCuadro = (index, letterId) => {
    const newLetters = [...letters];
    const currentLetterInSquare = newLetters[index];

    const letterObj = allLetters.find(l => l.id === letterId);
    if (!letterObj) {
      toast.error("Letra no válida.");
      return;
    }

    if (currentLetterInSquare) {
      // Si hay una letra en el cuadro, intercambiarla con la nueva letra
      const letterInDisplay = lettersDisplayed.find(l => l.id === letterId);
      if (letterInDisplay) {
        // Actualizar la letra en el cuadro
        newLetters[index] = letterId;
        setLetters(newLetters);

        // Remover la letra de lettersDisplayed
        setLettersDisplayed(prev => prev.filter(l => l.id !== letterId));

        // Agregar la letra anterior del cuadro de vuelta al escenario
        const previousLetterObj = allLetters.find(l => l.id === currentLetterInSquare);
        if (previousLetterObj) {
          setLettersDisplayed(prev => [
            ...prev,
            {
              id: previousLetterObj.id,
              src: previousLetterObj.src,
              alt: previousLetterObj.alt,
              left: Math.floor(Math.random() * 500) + 50, // Ajusta según el tamaño del contenedor
              top: Math.floor(Math.random() * 300) + 50,
            }
          ]);
        }
      }
    } else {
      // Si no hay letra en el cuadro, simplemente asignar la letra
      newLetters[index] = letterId;
      setLetters(newLetters);
      setLettersDisplayed(prev => prev.filter(l => l.id !== letterId));
    }

    // Verificar la condición de victoria
    checkVictory(newLetters);
  };

  // Función para manejar el drop en papeles
  const handleDropImage = (e, papelId) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain"); // e.g., "foto1"
    const selectedImage = images.find(img => img.id === data);
    
    if (!selectedImage) {
      toast.error("Imagen no válida.");
      return;
    }

    // Verifica si la imagen ya ha sido asignada
    const alreadyAssigned = Object.values(assignedImages).some(
      assigned => assigned.some(img => img.id === selectedImage.id)
    );

    if (alreadyAssigned) {
      toast.error("Esta imagen ya ha sido asignada a un papel.");
      return;
    }

    // Verifica si la imagen corresponde al papel
    if (selectedImage.correctPapelId === papelId) {
      // Asigna la imagen al papel
      setAssignedImages(prev => ({
        ...prev,
        [papelId]: [...prev[papelId], selectedImage],
      }));

      // Determinar cuántas letras asignar (1 o 2)
      let lettersToAssign = 1;
      if (papelesWithTwoLetters.includes(papelId) && lettersAvailable.length >= 2) {
        lettersToAssign = 2;
      } else if (lettersAvailable.length === 1) {
        lettersToAssign = 1;
      }

      // Asignar las letras de manera atómica para evitar duplicaciones
      if (lettersAvailable.length === 0) {
        toast.error("No hay más letras disponibles para asignar.");
        return;
      }

      // Shuffle lettersAvailable para seleccionar aleatoriamente
      const shuffledLetters = [...lettersAvailable].sort(() => 0.5 - Math.random());
      const lettersToAssignActual = shuffledLetters.slice(0, lettersToAssign);

      // Asignar las letras seleccionadas
      const newLettersDisplayed = lettersToAssignActual.map(selectedLetter => ({
        id: selectedLetter.id,
        src: selectedLetter.src,
        alt: selectedLetter.alt,
        left: Math.floor(Math.random() * 500) + 50, // Reducir rango horizontal
        top: Math.floor(Math.random() * 300) + 50,  // Reducir rango vertical
      }));

      setLettersDisplayed(prev => [...prev, ...newLettersDisplayed]);

      // Actualizar lettersAvailable eliminando las letras asignadas
      setLettersAvailable(prev => prev.filter(letter => !lettersToAssignActual.includes(letter)));

      toast.success(`¡Correcto! ${selectedImage.alt} se ha asignado a Papel ${papelId}.`);
    } else {
      toast.error(`Incorrecto. ${selectedImage.alt} no corresponde a Papel ${papelId}.`);
    }
  };

  // Función para permitir el drop
  const allowDrop = (e) => {
    e.preventDefault();
  };

  // Función para manejar el drop en cuadros para letras
  const handleDropLetter = (e, squareIndex) => {
    e.preventDefault();
    const letterId = e.dataTransfer.getData("text/plain"); // e.g., "letra1"
    const source = e.dataTransfer.getData("source"); // e.g., "square-0"

    if (source && source.startsWith("square-")) {
      // La letra viene de un cuadro, manejar intercambio
      const index = parseInt(source.split("-")[1], 10);
      const currentLetterId = letters[index];

      if (currentLetterId === letterId) {
        // La letra ya está en el cuadro, no hacer nada
        return;
      }

      const letterInDisplay = lettersDisplayed.find(l => l.id === letterId);
      if (letterInDisplay) {
        // Intercambiar las letras
        handleDropCuadro(squareIndex, letterId);
      }
    } else {
      // La letra viene del escenario
      const letterInDisplay = lettersDisplayed.find(l => l.id === letterId);
      if (letterInDisplay) {
        handleDropCuadro(squareIndex, letterId);
      }
    }
  };

  // Función para manejar el drop desde los cuadros al escenario
  const handleDropFromSquare = (e) => {
    e.preventDefault();
    const letterId = e.dataTransfer.getData("text/plain"); // e.g., "letra1"
    const source = e.dataTransfer.getData("source"); // e.g., "square-0"

    if (source && source.startsWith("square-")) {
      const index = parseInt(source.split("-")[1], 10);
      const currentLetterId = letters[index];

      if (currentLetterId === letterId) {
        // Remover la letra del cuadro
        const newLetters = [...letters];
        newLetters[index] = null;
        setLetters(newLetters);

        // Agregar la letra de vuelta al escenario con una nueva posición
        const letterObj = allLetters.find(l => l.id === letterId);
        if (letterObj) {
          setLettersDisplayed(prev => [
            ...prev,
            {
              id: letterObj.id,
              src: letterObj.src,
              alt: letterObj.alt,
              left: Math.floor(Math.random() * 500) + 50, // Ajustar según el tamaño del contenedor
              top: Math.floor(Math.random() * 300) + 50,
            }
          ]);
        }

        // Verificar la condición de victoria
        checkVictory(newLetters);
      }
    }
  };
  

  // Función para verificar la condición de victoria
  const checkVictory = (currentLetters) => {
    const isVictory = currentLetters.every((letterId, index) => {
      if (!letterId) return false;
      return letterId === `letra${index + 1}`;
    });
  
    if (isVictory) {
      setShowVictoryImage(true); // Mostrar la imagen de victoria
    }
  };
  

  const handleImageClick = () => {
    navigate("/"); // Redirige a la página raíz
    window.location.reload(); // Recarga la página después de la navegación
  };
  
  const styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.8)", // Fondo oscuro
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000, // Asegurarse de que esté encima de todo
    },
    image: {
      cursor: "pointer",
      width: "300px",
      height: "auto",
      boxShadow: "0 0 20px rgba(255, 255, 255, 0.8)", // Efecto de brillo
    },
  };

  // Computar los IDs de imágenes ya asignadas
  const assignedImageIds = new Set(
    Object.values(assignedImages).flat().map(img => img.id)
  );

  return (
    <motion.div
      className="papeles-container"
      style={{ backgroundImage: `url(${fondoTitulo})` }}
      ref={containerRef} // Asigna la referencia al contenedor principal
      onDragOver={allowDrop}
      onDrop={handleDropFromSquare} // Permite soltar letras desde cuadros al escenario
    >
      {/* Botón de Reinicio Opcional */}
      <button onClick={() => window.location.reload()} className="reset-button">
        Reiniciar Juego
      </button>
      {showVictoryImage && (
        <div style={styles.overlay}>
          <img
            src={victoriaImg}
            alt="¡Victoria!"
            style={styles.image}
            onClick={handleImageClick}
          />
        </div>
      )}
      {/* Cuadros alineados horizontalmente */}
      <motion.div className="cuadros">
        {cuadrosImages.map((cuadro, index) => {
          const letterId = letters[index];
          const letterObj = allLetters.find(l => l.id === letterId);
          
          return (
            <motion.div
              key={index}
              className="cuadro"
              onDragOver={(e) => allowDrop(e)}
              onDrop={(e) => handleDropLetter(e, index)}
            >
              {letterObj ? (
                <img
                  src={letterObj.src}
                  alt={`Letra ${index + 1}`}
                  className="letra-image"
                  draggable={true}
                  onDragStart={(e) => {
                    e.dataTransfer.setData("text/plain", letterId);
                    // Pasar el índice del cuadro desde el cual se arrastra
                    e.dataTransfer.setData("source", `square-${index}`);
                  }}
                />
              ) : (
                <motion.img src={cuadro} alt={`Cuadro ${index + 1}`} className="cuadro-img" />
              )}
            </motion.div>
          );
        })}
      </motion.div>

      {/* Fotos y otras imágenes decorativas */}
      <div
        className="decorative-images"
        style={{ top: `${decorativePosition.top}px`, left: `${decorativePosition.left}px` }}
      >
        {images
          .filter(img => !assignedImageIds.has(img.id)) // Filtrar imágenes ya asignadas
          .map((img, index) => (
            <motion.img
              key={img.id}
              src={img.src}
              alt={img.alt}
              className="decorative"
              draggable={true} // Habilita el arrastre nativo
              onDragStart={(e) => {
                if (e.dataTransfer) { // Verifica que dataTransfer esté disponible
                  e.dataTransfer.setData("text/plain", img.id);
                }
              }}
              custom={{
                delay: index * 0.1,
              }}
              variants={decorativeVariants}
              initial="initial"
              animate="animate"
            />
          ))
        }
      </div>

      {/* Letras del alfabeto ruso */}
      {lettersDisplayed.map(letter => (
        <motion.img
          key={letter.id}
          src={letter.src}
          alt={letter.alt}
          className="letter"
          style={{ top: `${letter.top}px`, left: `${letter.left}px` }}
          draggable={true} // Habilita el arrastre de letras
          onDragStart={(e) => {
            if (e.dataTransfer) {
              e.dataTransfer.setData("text/plain", letter.id);
            }
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      ))}

      {/* Papeles grandes */}
      <motion.div className="papeles">
        {papeles.map((papel) => (
          <motion.div
            key={papel.id}
            className={`papel ${papel.id === 2 || papel.id === 4 ? 'papel-offset' : ''}`}
            onDragOver={allowDrop}
            onDrop={(e) => handleDropImage(e, papel.id)}
            ref={el => papelRefs.current[papel.id] = el}
          >
            {/* Imagen base del papel */}
            <img src={papel.src} alt={`Papel ${papel.id}`} className="cuadro-img" />

            {/* Imágenes asignadas */}
            {assignedImages[papel.id].map((assignedImg, index) => (
              <img
                key={assignedImg.id}
                src={assignedImg.src}
                alt={`Asignada a Papel ${papel.id}`}
                className={`assigned-image ${papel.id === 2 || papel.id === 4 ? 'assigned-image-right' : ''}`}
                style={{
                  top: `${10 + index * 60}px`,
                  left: papel.id === 2 || papel.id === 4 ? 'unset' : '10px',
                  right: papel.id === 2 || papel.id === 4 ? '10px' : 'unset'
                }}
              />
            ))}
          </motion.div>
        ))}
      </motion.div>

      {/* Contenedor de Notificaciones */}
      <ToastContainer />
    </motion.div>
  );
};

export default Papeles;
