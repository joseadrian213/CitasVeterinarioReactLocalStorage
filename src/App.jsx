import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";
import { useState,useEffect} from "react";

function App() {
// const [pacientes,setPacientes]=useState([]);
const [pacientes,setPacientes]=useState(JSON.parse(localStorage.getItem('pacientes'))??[]);
const [paciente, setPaciente]=useState({}); 

//Este useEffect se manda a llamar de manera automática y solo se ejecuta una vez al cargar el sitio  
// useEffect(() => {
//   const obtenerLS=() => {
//                                             //Le indicamos con el doble signo de interrogacion que si no existe un localStorage añada un string vacio 
//     const pacientesLS=JSON.parse(localStorage.getItem('pacientes'))??[]; 
//     setPacientes(pacientesLS); 
//   }
//   obtenerLS(); 
// }, [])


useEffect(() => {
  localStorage.setItem('pacientes',JSON.stringify(pacientes))
}, [pacientes])


const eliminarPaciente=(id) => {
const pacientesActualizados=pacientes.filter(paciente=>paciente.id!== id); 
setPacientes(pacientesActualizados); 
}

  return (
    //Sentro del return no se pueden utilizar las funciones
    //Todas las etiquetas deben de tener un cierre
    //Los elementos deben de ir dentro de un div o fragment <></> que es apretura y cierre sin una etiqueta asignada
    <div className="container mx-auto mt-20">
      <Header/>
      <div className=" mt-2 md:flex">
        {/* De esta forma le pasamos los datos o props hacia otros componentes desde el padre  */}
        <Formulario 
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente}
        />
        <ListadoPacientes
        pacientes={pacientes}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
        />
      </div>
      {/*
  <div>
  {/* El codigo de java script solo se puede manejar como expresiones y debe ser entre llaves para que lo reconozca react }
    <h1>{'Hola Mundo'.toLowerCase()}</h1>
    <p>{edad}</p>
  </div>
   */}
    </div>
  );
}

export default App;
