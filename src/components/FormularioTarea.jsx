import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState, useEffect } from "react";
// Use effect ciclo de vida componentes

const FormularioTarea = () => {
  //* Zona de variables
  // Creacion de la variable localStorage, que contiene nuestro array de lstaTareas
  const tareasDelLocalStorage = JSON.parse(localStorage.getItem("listaTareas") || [])
  const [tarea, setTarea] = useState("");
  // Array de tareas
  const [tareas, setTareas] = useState(tareasDelLocalStorage);


  //*Zona ciclo de vida
  // El primer parametro es una funcion anonima
  // El nombrar "useEffect" hace que se ejecute en montaje/actualizacion
  useEffect(()=>{
    // Cuando el comopoennte se ha montado, actualiza el local storage
    localStorage.setItem("listaTareas", JSON.stringify(tareas))
    console.log("Aqui deberia guardar en local storage");
  },[tareas])
  // Al poner al final ",[tareas]" ignora la actualizacion del input, solo se fija en la actualizacion del array


  //* Zona de Funciones

  const handleSubmit = (e) => {
    e.preventDefault();
    setTareas([...tareas, tarea]);
    //* Limpiar el imput
    setTarea("");
  };
  const borrarTarea = (nombreTarea) => {
    // Filter es un metodo inmutable que modifica una copia del array
    // Filter lleva una funcion
    let copiaListaTareas = tareas.filter(
      (itemTarea) => itemTarea !== nombreTarea
    );
    // Ahora debo actualizar el state
    setTareas(copiaListaTareas);
  };

  //* Zona componentes
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          <Form.Control
            type="text"
            placeholder="ingrese una tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button variant="primary" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      {/* Usamos el mismo nombre del prop con el objeto a enviar */}
      {/* Lo de la izquierda es el prop, y lo de la derecha es el state */}
      <ListaTareas tareas={tareas} borrarTarea={borrarTarea}></ListaTareas>
      {/* Envio el prop de fucion */}
    </>
  );
};

export default FormularioTarea;
