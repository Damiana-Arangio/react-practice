function Counter(props) {

    const { count, handleIncrement, handleDecrement} = props;

    return (
        <div>
            <p> Contatore: {count} </p>
            <button onClick={handleIncrement}> + </button>
            <button onClick={handleDecrement}> - </button>
        </div>
    )
}

export default Counter;