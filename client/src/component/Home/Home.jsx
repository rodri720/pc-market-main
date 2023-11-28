import React, { useEffect, useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { photoData } from '../photoData/photoData.js';

function Home() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setPhotos(photoData);
        setLoading(false);
      } catch (error) {
        console.error('Error al cargar las fotos:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home-container">
      <h1 className="title">Descubre Las Mejores Ofertas en Laptop Lenovo</h1>
      <Link to="/">Volver a la página de inicio</Link>

      <div className="spacer"></div>

      {loading ? (
        <p>Cargando fotos...</p>
      ) : (
        <div className="photo-container">
          <div className="left-column">
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
      )}
    </div>
  );
}

export default Home;
