// MyCard.js
import PropTypes from "prop-types"; // Importa PropTypes para la validación de propiedades
import Card from "react-bootstrap/Card"; // Importa el componente Card de react-bootstrap
import Tags from "./Tags"; // Importa el componente Tags desde el archivo Tags.js

// Componente funcional MyCard
const MyCard = ({ cardImg, cardTitle, cardText, badgeColor, badgeText }) => {
  return (
    <Card className='cardStyle'>
      {" "}
      {/* Abre el componente de tarjeta con la clase 'cardStyle' */}
      <Card.Img className='imgStyle' variant='top' src={cardImg} />{" "}
      {/* Inserta la imagen de la tarjeta */}
      <Card.Body>
        {" "}
        {/* Abre el cuerpo de la tarjeta */}
        <Card.Title>{cardTitle}</Card.Title>{" "}
        {/* Inserta el título de la tarjeta */}
        <Card.Text>{cardText}</Card.Text> {/* Inserta el texto de la tarjeta */}
        <Tags badgeColor={badgeColor} badgeText={badgeText} />{" "}
        {/* Inserta el componente de etiquetas */}
      </Card.Body>{" "}
      {/* Cierra el cuerpo de la tarjeta */}
    </Card> /* Cierra el componente de tarjeta */
  );
};

// Define las propiedades requeridas y sus tipos
MyCard.propTypes = {
  cardImg: PropTypes.string.isRequired, // URL de la imagen de la tarjeta
  cardTitle: PropTypes.string.isRequired, // Título de la tarjeta
  cardText: PropTypes.string.isRequired, // Texto de la tarjeta
  badgeColor: PropTypes.string.isRequired, // Color de la etiqueta
  badgeText: PropTypes.string.isRequired, // Texto de la etiqueta
};

export default MyCard; // Exporta el componente MyCard
