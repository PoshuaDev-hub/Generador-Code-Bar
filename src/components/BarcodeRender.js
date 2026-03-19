import { useEffect, useRef } from 'react';
import JsBarcode from 'jsbarcode';
import { motion } from 'framer-motion';

const BarcodeRender = ({ value, options }) => {
  const barcodeRef = useRef(null);

  useEffect(() => {
    if (barcodeRef.current && value) {
      try {
        JsBarcode(barcodeRef.current, value, {
          ...options,
          xmlTag: true, // Usamos SVG para mejor calidad
        });
      } catch (e) {
        console.error("Error generando barcode:", e);
      }
    }
  }, [value, options]);

    return (
    <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        key={value}
        className="flex justify-center barcode-container bg-transparent" // Quitamos p-8 y bg-white
    >
        <svg ref={barcodeRef}></svg>
    </motion.div>
    );
};

export default BarcodeRender;