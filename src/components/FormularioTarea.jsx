import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState } from "react";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");
  // Array de tareas
  const [tareas, setTareas] = useState([]);

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
