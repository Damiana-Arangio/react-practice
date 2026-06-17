function SelectableButton(props) {

    const { label, isActive, handleSelect } = props;
    
    return(
        <button 
            className={isActive ? "btn-selezionato" : ""}
            onClick = {handleSelect}>
            {label}
        </button>

    )
}

export default SelectableButton;