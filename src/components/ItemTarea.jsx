/* eslint-disable react/prop-types */
import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = ({tarea, borrarTarea}) => {
  return <ListGroup.Item className="d-flex justify-content-between">
    {tarea}
    {/* Como "borrarTarea" lleva parametros, no puedo escribirla de manera "limpia" sin parametros, para que una funcion anonima lleve argumentos tengo que llamar otra funcion */}
    <Button variant="danger" onClick={()=> borrarTarea(tarea)}>Borrar</Button>
    </ListGroup.Item>;
};

export default ItemTarea;