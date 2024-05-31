import { useState } from "react";
import "./App.css";
import Formulario from "./components/Formulario/Formulario";
import Header from "./components/Header/Header";
import MiOrg from "./components/MiOrg";

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true);

  //Ternario --> condicion ? seMuestra : noSeMuestra
  //Cortocircuito --> condicion && seMuestra
  //<></> fragments
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  return (
    <div>
      <Header />
      {/*mostrarFormulario === true ? <Formulario /> : <></>*/}
      {mostrarFormulario && <Formulario />}
      <MiOrg cambiarMostrar={cambiarMostrar} />
    </div>
  );
}

export default App;
