import { useBarcode } from '../hooks/useBarcode';
import BarcodeRender from './BarcodeRender';
import ExportActions from './ExportActions';

const BarcodeCard = () => {
  const { value, setValue } = useBarcode();

  return (
    <div className="main-card flex flex-col gap-6">
      <div className="space-y-1">
        <label className="text-[9px] uppercase tracking-[0.3em] text-white/20 ml-2">Data Input</label>
        <input 
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full bg-white/5 border-none rounded-2xl px-6 py-4 text-white text-center outline-none focus:ring-1 focus:ring-[#ff6b00] transition-all text-sm"
          placeholder="Escribe aquí..."
        />
      </div>

      <button className="w-full bg-[#ff6b00] hover:bg-[#ff8533] text-white font-bold py-4 rounded-2xl transition-all active:scale-95 shadow-lg shadow-orange-900/30 uppercase tracking-widest text-xs">
        Generar
      </button>

      <div className="barcode-box">
        <div className="barcode-container w-full flex justify-center">
          <BarcodeRender 
            value={value} 
            options={{
              format: "CODE128",
              lineColor: "#000",
              background: "#fff",
              displayValue: true,
              fontSize: 14,
              width: 2,
              margin: 10
            }} 
          />
        </div>
        <ExportActions value={value} />
      </div>
    </div>
  );
};

export default BarcodeCard;