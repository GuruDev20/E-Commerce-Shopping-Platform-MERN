import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/More.css';
import { imageData } from './Filter';
function More() {
  const { index } = useParams();
  const selectedImageData = imageData[index];
  return (
    <div>
      <h2>{selectedImageData.type}</h2>
      <p>Category: {selectedImageData.category}</p>
      <p>Price: {selectedImageData.price}</p>
    </div>
  );
}

export default More;
