import { useState } from 'react';

export const useBarcode = () => {
  // Ponemos un texto de ejemplo para que la tarjeta no nazca vacía
  const [value, setValue] = useState('ESCRIBE-AQUI');
  const [lineColor, setLineColor] = useState('#000000');

  return { value, setValue, lineColor, setLineColor };
};