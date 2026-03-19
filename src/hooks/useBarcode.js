import { useState } from 'react';

export const useBarcode = () => {
  const [value, setValue] = useState('PROYECTO-PoshuaDev');
  const [lineColor, setLineColor] = useState('#000000');

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  return { value, setValue: handleValueChange, lineColor, setLineColor };
};