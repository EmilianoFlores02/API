import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Encabezado from './Components/Encabezado';
import Listado from './Components/Listado';
import Buscador from './Components/Buscador';
import Imagen from './Components/Imagen';

function App() {

  const [busquedaTexto, setBusquedaTexto] = useState("");
 
  const [arreglo, setArreglo] = useState([]);

  const [total, setTotal]= useState(0);

  const [busqueda, setBusqueda]= useState(false);

  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
  const [mostrarImagen, setMostrarImagen] = useState(false);

  const [infoRaza, setInfoRaza] = useState(null);
  
  useEffect(() => {
    const apikey = "live_4K4WJ9sCWsTYiiyRVJl7XCE8IwdGttGWgM0PD9ojHN2AG8aYy3bfNjgF9phDncnw" //<-- Your Cat API key (reemplaza con tu clave real)
    const limit = 10; // Número de imágenes a obtener
    
    // Si hay texto de búsqueda, buscar por raza, sino obtener imágenes aleatorias
    let api_url = `https://api.thecatapi.com/v1/images/search?limit=${limit}&size=med&mime_types=jpg,png`;
    
    // Si hay texto de búsqueda, primero buscar razas y luego obtener imágenes de esa raza
    if (busquedaTexto.length > 0) {
      // Primero buscar la raza
      fetch(`https://api.thecatapi.com/v1/breeds/search?q=${busquedaTexto}`, {
        headers: {
          'x-api-key': apikey
        }
      })
        .then(data => data.json())
        .then(breeds => {
          if (breeds.length > 0) {
            // Si encontramos razas, guardar la información de la raza
            setInfoRaza({
              name: breeds[0].name,
              description: breeds[0].description
            });
            // Obtener imágenes de la primera raza encontrada
            const breedId = breeds[0].id;
            api_url = `https://api.thecatapi.com/v1/images/search?limit=${limit}&breed_ids=${breedId}&size=med&mime_types=jpg,png`;
          } else {
            setInfoRaza(null);
          }
          
          // Hacer la petición de imágenes
          return fetch(api_url, {
            headers: {
              'x-api-key': apikey
            }
          });
        })
        .then(data => data.json())
        .then(resultado => {
          console.log(resultado);
          setTotal(resultado.length);
          setArreglo(resultado);
          setBusqueda(true);
        })
        .catch(error => {
          console.error('Error:', error);
          setArreglo([]);
          setTotal(0);
          setBusqueda(true);
          setInfoRaza(null);
        });
    } else {
      // Si no hay búsqueda, obtener imágenes aleatorias
      setInfoRaza(null);
      fetch(api_url, {
        headers: {
          'x-api-key': apikey
        }
      })
        .then(data => data.json())
        .then(resultado => {
          console.log(resultado);
          setTotal(resultado.length);
          setArreglo(resultado);
          setBusqueda(false); // false indica que son gatos aleatorios, no una búsqueda
        })
        .catch(error => {
          console.error('Error:', error);
          setArreglo([]);
          setTotal(0);
          setBusqueda(false);
        });
    }
  }, [busquedaTexto]);

  return (
    <div className="App">
        <Encabezado />

        <Buscador
          setBusquedaTexto={setBusquedaTexto}
        />

        <Listado
           busqueda={busqueda}
           total={total}
           arreglo={arreglo}
           infoRaza={infoRaza}
           onImagenClick={(gato) => {
             setImagenSeleccionada(gato);
             setMostrarImagen(true);
           }}
        />

        <Imagen
          mostrar={mostrarImagen}
          cerrar={() => setMostrarImagen(false)}
          gato={imagenSeleccionada}
        />
       
    </div>
  );
}

export default App;