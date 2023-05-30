/* eslint-disable react/prop-types */
import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({tareas}) => {
  return (
    <ListGroup>
      {
        // Usamos el "map" xq crea un metodo en el array que es inmutable, como el prop
        // tarea para indicar los elementos de nuestro array tareas
        tareas.map((tarea, indiceTarea) => <ItemTarea tarea = {tarea} key ={indiceTarea}></ItemTarea>)
        // segundo argumento del map, es el indice del array
      }
      
    </ListGroup>
  );
};

export default ListaTareas;