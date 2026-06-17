function SynchronizedCounter(props) {

    const { count, handleIncrement } = props;

    return(
        <>
            <p> {count} </p>
            <button onClick={handleIncrement}> + </button>
        </>
    )
}

export default SynchronizedCounter;