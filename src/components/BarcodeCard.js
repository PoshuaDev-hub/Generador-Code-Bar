import { useBarcode } from '../hooks/useBarcode';
import BarcodeRender from './BarcodeRender';
import ExportActions from './ExportActions';

const BarcodeCard = () => {
  const { value, setValue } = useBarcode();

  return (
    <div className="main-card flex flex-col gap-6">
      <h1 className="text-white text-center text-xl font-light tracking-[0.4em] uppercase mb-2">
        Generador <span className="font-bold text-[#ff6b00]">Bar</span>
      </h1>
      
      <input 
        type="text"
        // Si el valor es el de ejemplo, lo limpiamos al hacer click para facilidad del usuario
        onFocus={(e) => { if(value === 'ESCRIBE-AQUI') setValue('') }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-center outline-none focus:ring-1 focus:ring-[#ff6b00] transition-all text-sm"
        placeholder="Escribe aquí..."
      />

      <button className="w-full bg-[#ff6b00] hover:bg-[#ff8533] text-white font-bold py-4 rounded-2xl transition-all active:scale-95 shadow-lg shadow-orange-900/40 uppercase tracking-widest text-xs">
        Generar
      </button>

      <div className="barcode-box">
        <div className="barcode-container w-full flex justify-center">
          {/* El código se renderiza solo si hay algo escrito */}
          {value && (
            <BarcodeRender 
              value={value} 
              options={{
                format: "CODE128",
                lineColor: "#000",
                background: "#fff",
                displayValue: true,
                fontSize: 15,
                width: 2,
                margin: 10
              }} 
            />
          )}
        </div>
      </div>

      <div className="flex justify-center">
        <ExportActions value={value} />
      </div>
    </div>
  );
};

export default BarcodeCard;