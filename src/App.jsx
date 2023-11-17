import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Titulo from './assets/Components.jsx/Header';
import MyCard from './assets/Components.jsx/MyCard';
import Footer from './assets/Components.jsx/Footer';




// Asumo que obtuve este arreglo de objetos de alguna base de datos
const arraydeobjetos = [
    { key: "01",
      url: "../../../src/assets/img/perrito1.jpg",
      nombre:"Bartolomeo",
      descripcion: "Un perro llego de energía y listo para jugar. Dale a Bartolomeo el hogar que se merece.",
      texto:"Salchicha",
      colorfondo:"primary"},

    { key: "02",
      url:"../../../src/assets/img/perrito2.jpg" ,
      nombre:"Judas",
      descripcion:"Juguetón, le gusta solo dormir y comer pero se lleva bien con niños y animales. Judas te amará.",
      texto:"Crestado Chino",
      colorfondo:"warning"},

    { key: "03",
      url:"../../../src/assets/img/perrito3.jpg",
      nombre:"Julito",
      descripcion:"Un perro de tamaño mediano. Amalo incondicionalmente y él sabrá agradecertelo.",
      texto:"Lobo siberiano",
      colorfondo:"success"},

    { key: "04",
      url:"../../../src/assets/img/perrito.jpg",
      nombre:"Calamardo",
      descripcion:"El perro más grande de su vecindario. Ha sido entrevistado en noticieros por su enorme tamaño.",
      texto:"Gran danés",
      colorfondo:"danger"}];


function App() {


  /* Hago un map para extraer las propiedades que necesito importar hacia MyCard */
  return (
    <>
      <Titulo title="ADOPTA UN PERRITO"/>
      <div className='principal'>
        {arraydeobjetos.map((item) => (<MyCard key={item.key} url={item.url} nombre={item.nombre} descripcion={item.descripcion} texto={item.texto} colorfondo={item.colorfondo}/>))}
      </div>
      <Footer/>
    </>
  )
}

export default App
