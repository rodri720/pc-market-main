import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { findPhotoById } from '../photoData/photoData';
import './Detail.css';

function Detail() {
  const { id } = useParams();
  const photo = findPhotoById(id);

  if (!photo) {
    return <div>La foto no se encontró.</div>;
  }

  return (
    <div className="detail-container">
      <Link to='/home' className="back-link">
        Volver a home
      </Link>
      <h1 className="detail-title">Detalle del producto</h1>
      <img src={photo.image} alt={`Foto ${id}`} width="400" height="400" />
      <p className="detail-text">{photo.text}</p>
    </div>
  );
}

export default Detail;
