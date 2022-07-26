import React from "react";

export function ToDoTWO({ todo, Borrar }) {
  const { id, task, comment } = todo;
  const buttonDelete = () => {
    Borrar(id);
  };

  function guardar_LocalStorage() {
    localStorage.setItem("id", id);
    localStorage.setItem("task", JSON.stringify(task));
    localStorage.setItem("comment", JSON.stringify(comment));
  }

  guardar_LocalStorage();

  return (
    <li>
      <a>
        <h2>{task}</h2>
        <div className="boton" onClick={buttonDelete}>
          <i className="fa-solid fa-trash"></i>
        </div>
        <hr />
        <p>{comment}</p>
      </a>
    </li>
  );
}
