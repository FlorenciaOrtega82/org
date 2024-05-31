import "./ListaOpciones.css";
const ListaOpciones = (props) => {
  // Metodo MAP -> arreglo.map((equipo, index) =>{
  // return <option> </option>
  //})
  const equipos = [
    "Programación",
    "Front End",
    "Data Science",
    "Devops",
    "UX y Diseño",
    "Móvil",
    "Innovación y gestión",
  ];

  const manejarCambio = (e) =>{
    props.actualizarEquipo(e.target.value)
  }
  return (
    <div className="lista-opciones">
      <label>Equipos</label>
      <select value={props.valor} onChange={manejarCambio}>
        <option value="" disable defaultValue="" hidden>
          Seleccionar equipo
        </option>
        {equipos.map((equipo, index) => (
          <option key={index} value={equipo}>{equipo}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaOpciones;
