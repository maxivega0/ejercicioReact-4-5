import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState } from "react";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Necesito conservar tareas(operador spreed "...")
    // Crea un nuevo array, toma cada uno de los elementos iterales y
    //  copialos en un nuevo arreglo y al final agrega el valor de stateTarea(input)
    setTareas([...tareas, tarea])
  }



  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          {/* accediendo mediante el evento onchange a los valores del imput  onChange={(e)=> console.log(e.target.value)*/}
          <Form.Control
            type="text"
            placeholder="ingrese una tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button variant="primary" type="submit">Agregar</Button>
        </Form.Group>
      </Form>
      <ListaTareas></ListaTareas>
    </>
  );
};

export default FormularioTarea;
