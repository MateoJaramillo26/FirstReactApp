import React, { useState } from "react";

export function TodoList() {
    const [tareas, setTereas] = useState([]);
    const [tarea, setTarea] = useState("");

    const agregarTarea = () => {
        if (tarea.trim() === "") return; // Evita agregar tareas vacías
        setTereas([...tareas, tarea]);
        setTarea(""); // Limpia el campo de entrada
    }

    const borrarTarea = () => {
        if (tarea.trim() === "") return;
        setTereas(tareas.filter(t => t !== tarea));
        setTarea("");
    }

    console.log("tarea:", tarea);
    

    return (
        <div>
            <h1>Lista de Tareas</h1>
            <input
                type="text"
                value={tarea}
                onChange={(e) => setTarea(e.target.value)}
                placeholder="Escribe una tarea"
            />
            <button onClick={() => agregarTarea()}>
                Agregar Tarea
            </button>
            <button onClick={() => borrarTarea()}>
                Borrar
            </button>

            <ul>
                {tareas.map((tarea, index) => (
                    <li key={index}>{tarea}</li>
                ))}
            </ul>

        </div>
    );
}