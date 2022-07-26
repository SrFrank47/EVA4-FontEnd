import React, { Fragment, useState, useRef } from "react";
import { v4 as uuid } from "uuid";
/* Importar ToDoTWO */
import { ToDoTWO } from "./ToDoTWO";

export function ToDo() {
  /* Definir una lista con tareas */
  const [AllTodo, SetToDo] = useState([]);

  const taskRef = useRef();

  const commentRef = useRef();

  const addTask = () => {
    const task = taskRef.current.value;
    console.log(task);

    const comment = commentRef.current.value;
    console.log(comment);

    if (task.trim() === "") return;
    console.log("Agregando tarea ...");

    if (comment.trim() === "") return;
    console.log("Agregando comment...");

    SetToDo((prevAllTodo) => {
      const newTask = {
        id: uuid(),
        task: task,
        comment: comment,
      };

      return [...prevAllTodo, newTask /* , newComment */];
    });
    taskRef.current.value = null;
    commentRef.current.value = null;
  };

  const Borrar = (id) => {
    console.log(id);
    const newAllTodo = AllTodo.filter((todo) => !todo.id !== id);
    /* const newtask1 = AllTodo.filter(todo => !todo.task !== task);
    const newcomment1 = AllTodo.filter(todo => !todo.comment !== comment); */
    SetToDo(newAllTodo);
    /* SetToDo(newtask1);
    SetToDo(newcomment1); */
  };

  var box = document.getElementById("box");

  function otroColor() {
    box.style.background = "var(--colorImportante)";
  }

  return (
    <Fragment>
      <h1>
        <u>Listado de Tareas</u>
      </h1>

      <div className="input-group">
        <input
          type="text"
          ref={taskRef}
          className="R-tittle form-control m-2"
          placeholder="Ingrese un Titulo"
        />
        <br />
        <input
          type="text"
          ref={commentRef}
          className="R-comment form-control m-2"
          placeholder="Ingrese un Comentario"
        />
        <input type="checkbox" id="box" className="importante m-2" onClick={otroColor} />
        Importante!
        <button className="btn btn-outline-success ms-2" onClick={addTask}>
          Agregar
        </button>
      </div>

      <div>
        <ul className="m-2">
          {AllTodo.map((todo) => (
            <ToDoTWO todo={todo} key={todo.id} Borrar={Borrar}></ToDoTWO>
          ))}
        </ul>
      </div>

      {/* <div>
        <ul className="list-group my-4">
          {AllTodo.map((todo) => (
            <ToDoTWO todo={todo} key={todo.id} Borrar={Borrar}></ToDoTWO>
          ))}
        </ul>
      </div> */}
    </Fragment>
  );
}
