function TodoItem(props) {
    const { task, index, deleteTask } = props;

    return (
        <li>
            {task}

            <button 
                onClick={() => deleteTask(index)}
            >
                Elimina
            </button>
        </li>
    );
}

export default TodoItem;