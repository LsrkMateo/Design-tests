import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <button className="btn btn-primary">Boton primario</button>
      <button className="btn btn-accent btn-outline">Boton tersario</button>
    </main>
  );
}
