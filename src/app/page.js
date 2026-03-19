"use client";
import { motion } from "framer-motion";
import BarcodeCard from "../components/BarcodeCard";


export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-6 bg-[#0f111a] overflow-hidden">
      {/* Círculos decorativos con opacidad más baja para que el fondo sea más oscuro como en tu foto */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] -z-10" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md" // Ajustado a max-w-md para que se vea vertical y compacto
      >
        {/* Título más sutil para que resalte la tarjeta */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-white/90">
            Barcode <span className="text-blue-500">Generator</span>
          </h1>
        </div>

        <BarcodeCard />
      </motion.div>
    </main>
  );
}
