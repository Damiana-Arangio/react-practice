function AccordionItem(props) {

    const { title, content, isOpen, handleToggle } = props;

    return(
        <>
            <h4 onClick={handleToggle}> {title} </h4>
            { isOpen && <p>{content}</p> }
            
        </>
    )
}

export default AccordionItem;