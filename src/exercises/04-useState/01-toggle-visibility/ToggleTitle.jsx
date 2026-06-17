
function ToggleTitle(props) {

    const { title, content, isVisible, handleToggle } = props;

    /*************
        RENDER
    *************/
    return (

            <>
            <h4 className={isVisible ? "titolo-selezionato" : ""}
                onClick = {handleToggle}> {title} </h4>
            
            {isVisible &&
                <h5> {content} </h5>
            }
        </>
        
    )
}

export default ToggleTitle;