import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState, useEffect } from "react";

const FormularioTarea = () => {
  //* Zona de variables
  const tareasDelLocalStorage = JSON.parse(localStorage.getItem("listaTareas") || [])
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState(tareasDelLocalStorage);


  //*Zona ciclo de vida
  useEffect(()=>{
    localStorage.setItem("listaTareas", JSON.stringify(tareas))
  },[tareas])


  //* Zona de Funciones

  const handleSubmit = (e) => {
    e.preventDefault();
    setTareas([...tareas, tarea]);
    //* Limpiar el imput
    setTarea("");
  };
  const borrarTarea = (nombreTarea) => {
    let copiaListaTareas = tareas.filter(
      (itemTarea) => itemTarea !== nombreTarea
    );
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
      <ListaTareas tareas={tareas} borrarTarea={borrarTarea}></ListaTareas>
    </>
  );
};

export default FormularioTarea;
