import { Download } from 'lucide-react';

const ExportActions = ({ value }) => {
  const downloadPNG = () => {
    const svg = document.querySelector('.barcode-container svg');
    if (!svg) return;
    
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    
    img.onload = () => {
      canvas.width = img.width + 40;
      canvas.height = img.height + 40;
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 20, 20);
      const link = document.createElement("a");
      link.download = `BarCode-${value}.png`;
      link.href = canvas.toDataURL();
      link.click();
    };
    img.src = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgData)));
  };

  return (
    <button 
      onClick={downloadPNG}
      className="flex items-center gap-2 px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white/60 hover:text-white rounded-full text-[10px] font-medium uppercase tracking-widest transition-all"
    >
      <Download size={12} className="text-[#ff6b00]" />
      Descargar PNG
    </button>
  );
};

export default ExportActions;