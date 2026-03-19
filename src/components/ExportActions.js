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
      link.download = `barcode-${value}.png`;
      link.href = canvas.toDataURL();
      link.click();
    };
    img.src = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgData)));
  };

  return (
    <button 
      onClick={downloadPNG}
      className="mt-4 flex items-center gap-2 px-4 py-2 bg-orange-500/10 hover:bg-orange-500/20 text-orange-600 rounded-full text-[10px] font-bold uppercase tracking-tighter transition-all"
    >
      <Download size={12} />
      Guardar PNG
    </button>
  );
};

export default ExportActions;