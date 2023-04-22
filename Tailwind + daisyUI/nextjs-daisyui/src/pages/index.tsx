import Modal from "../components/Modal";
import Navegacion from '../components/Navegacion'
export default function Home() {
  return (
    <main>
      <div className="navegacion" id="navbar">
        <Navegacion/>
      </div>

      <div className="div-principal">
        <Modal />
        <button className="btn btn-primary">Esto no hace nada</button>
        <button className="btn btn-accent btn-outline">Esto tampoco</button>
      </div>

    </main>
  );
}
