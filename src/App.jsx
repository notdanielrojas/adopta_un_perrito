// App.js
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import MyCard from "./components/MyCard";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      {/* Encabezado */}
      <Header title='Adopta un perrito' />

      {/* Contenedor de tarjetas */}
      <div className='d-flex gap-3 mt-5'>
        <MyCard
          cardImg='https://i.imgur.com/wDvdVrv.jpeg'
          cardTitle='Mandy'
          cardText='¡Conoce a Mandy, una perrita encantadora que anhela encontrar un hogar para siempre!.'
          badgeColor='success'
          badgeText='Cocker Spanish'
        />
        <MyCard
          cardImg='https://i.imgur.com/JxpmmWw.jpeg'
          cardTitle='Luna'
          cardText='¡Luna te espera con los brazos abiertos, lista para llenar tus noches de amor y tus días de alegría!.'
          badgeColor='primary'
          badgeText='Mestizo'
        />
        <MyCard
          cardImg='https://i.imgur.com/jjvlk9e.jpeg'
          cardTitle='Chan'
          cardText='¡Chan, la perrita más simpática y juguetona, busca a alguien que comparta su energía y lo acompañe en sus travesuras!.'
          badgeColor='danger'
          badgeText='Poodle'
        />
        <MyCard
          cardImg='https://i.imgur.com/cCmVnPi.jpeg'
          cardTitle='Fluffy'
          cardText='¡Fluffy es todo ternura y dulzura, esperando pacientemente el momento de encontrar un hogar para siempre!.'
          badgeColor='warning'
          badgeText='Beagle'
        />
      </div>

      {/* Pie de página */}
      <Footer footerText='Explora nuestra galería de adopción de perros para encontrar a tu compañero perfecto. Tenemos una variedad de perros con diferentes personalidades y tamaños, todos en busca de un hogar amoroso. Cada imagen captura su esencia única. Adopta un perro y bríndale una segunda oportunidad. Encuentra a tu compañero para siempre.' />
    </>
  );
}

export default App;
