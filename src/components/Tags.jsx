// Tags.js
import PropTypes from "prop-types"; // Importa PropTypes para la validación de propiedades
import Badge from "react-bootstrap/Badge"; // Importa el componente Badge de react-bootstrap

// Componente funcional Tags
const Tags = ({ badgeColor, badgeText }) => {
  return (
    <Badge className='badgeStyle' bg={badgeColor}>
      {" "}
      {/* Componente de etiqueta con clase 'badgeStyle' y color de fondo definido por 'badgeColor' */}
      {badgeText} {/* Texto de la etiqueta */}
    </Badge>
  );
};

// Define las propiedades requeridas y sus tipos
Tags.propTypes = {
  badgeColor: PropTypes.string.isRequired, // Color de la etiqueta
  badgeText: PropTypes.string.isRequired, // Texto de la etiqueta
};

export default Tags; // Exporta el componente Tags
