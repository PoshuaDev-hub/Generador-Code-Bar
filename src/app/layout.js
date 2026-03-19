import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Modern Barcode Gen | Joshua Chiguay",
  description: "Generador de códigos de barras profesional y minimalista",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}