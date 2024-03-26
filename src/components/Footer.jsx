// Footer.js
import PropTypes from "prop-types"; // Importa PropTypes para la validación de propiedades

// Componente funcional Footer
const Footer = ({ footerText }) => {
  return (
    <>
      <footer className='footer mt-5 mb-3 py-3 color-black fw-bold'>
        {" "}
        {/* Etiqueta de pie de página con clases de estilos */}
        <div className='container'>
          {" "}
          {/* Contenedor para el contenido del pie de página */}
          <p className='text-muted'>{footerText}</p>{" "}
          {/* Texto del pie de página */}
        </div>
      </footer>
    </>
  );
};

// Define las propiedades requeridas y sus tipos
Footer.propTypes = {
  footerText: PropTypes.string.isRequired, // Texto del pie de página
};

export default Footer; // Exporta el componente Footer
