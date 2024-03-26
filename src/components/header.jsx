// Header.js
import PropTypes from "prop-types"; // Importa PropTypes para la validación de propiedades

// Componente funcional Header
const Header = ({ title }) => {
  return <h1 className='h1Style'>{title}</h1>; // Encabezado con clase 'h1Style' y título dinámico
};

// Define las propiedades requeridas y sus tipos
Header.propTypes = {
  title: PropTypes.string.isRequired, // Título del encabezado
};

export default Header; // Exporta el componente Header
