import { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoItem from "./TodoItem";

function TodoList() {
    const [newTask, setNewTask] = useState("");

    const [listaTask, setListaTask] = useState([
        "Studiare React",
        "Fare esercizi sui form",
        "Ripassare useState"
    ]);

    return (
        <>
            <h3>Todo List</h3>

            {/* Numero totale di task */}
            <p>Totale task: {listaTask.length}</p>

            {/* Lista task */}
            {listaTask.length === 0 ? (
                <p>Non ci sono task da mostrare.</p>
            ) : (
                <ul>
                    {listaTask.map((task, index) => (
                        <TodoItem
                            key={index}
                            task={task}
                            index={index}
                            deleteTask={deleteTask}
                        />
                    ))}
                </ul>
            )}

            {/* Form per aggiungere un nuovo task */}
            <AddTodoForm
                newTask={newTask}
                setNewTask={setNewTask}
                addTask={addTask}
            />
        </>
    );

    /****************
        FUNZIONI
    *****************/
    function addTask() {
        if (newTask.trim() === "") {
            return;
        }

        const listaAggiornata = [...listaTask, newTask.trim()];

        setListaTask(listaAggiornata);
        setNewTask("");
    }

    function deleteTask(indexToDelete) {
        const listaAggiornata = listaTask.filter((task, index) => {
            return index !== indexToDelete;
        });

        setListaTask(listaAggiornata);
    }
}

export default TodoList;