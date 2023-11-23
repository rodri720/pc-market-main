import React, { useEffect, useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { photoData } from '../photoData/photoData.js';

function Home() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // Simulamos una solicitud para cargar las fotos (esto podría ser una solicitud HTTP real)
    const fetchData = async () => {
      try {
        // Simulamos una solicitud asíncrona
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Una vez que se resuelve la promesa, actualizamos el estado con los datos
        setPhotos(photoData);
      } catch (error) {
        console.error('Error al cargar las fotos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home-container">
      <h1 className="title">Bienvenidos a Muebles Rosarito</h1>
      <Link to='/'>Volver a la página de inicio</Link>

      <div className="spacer"></div>

      <div className="photo-container">
        <div className="left-column margin-left:0">
          {photos.slice(0, 4).map((photoItem, index) => (
            <div key={index} className="photo-item">
              <div className="image-container">
                <Link to={`/detail/${index}`}>
                  <img src={photoItem.image} alt={`Foto ${index}`} className="photo" />
                </Link>
              </div>
              
            </div>
          ))}
        </div>
        <div className="centered-column">
          {photos.slice(4).map((photoItem, index) => (
            <div key={index + 4} className="photo-item">
              <div className="image-container">
                <Link to={`/detail/${index + 4}`}>
                  <img src={photoItem.image} alt={`Foto ${index + 4}`} className="photo" />
                </Link>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
