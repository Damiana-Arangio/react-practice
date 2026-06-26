function AddTodoForm(props) {
    const { newTask, setNewTask, addTask } = props;

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="task">Aggiungi un nuovo task:</label>

                <input 
                    id="task"
                    type="text" 
                    name="task"
                    value={newTask}
                    onChange={handleChange}
                />

                <button type="submit">
                    Aggiungi task
                </button>
            </form>
        </>
    );

    /****************
        FUNZIONI
    *****************/
    function handleSubmit(event) {
        event.preventDefault();
        addTask();
    }

    function handleChange(e) {
        setNewTask(e.target.value);
    }
}

export default AddTodoForm;