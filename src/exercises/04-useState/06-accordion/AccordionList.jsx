import { useState } from "react";
import AccordionItem from "./AccordionItem";

function AccordionList() {

    const faqs = [
        { id: 1, title: "Titolo Accordion 1", content: "Contenuto Acciordion 1"},
        { id: 2, title: "Titolo Accordion 1", content: "Contenuto Acciordion 2" },
        { id: 3, title: "Titolo Accordion 1", content: "Contenuto Acciordion 3" },
        { id: 4, title: "Titolo Accordion 1", content: "Contenuto Acciordion 4" },
        { id: 5, title: "Titolo Accordion 1", content: "Contenuto Acciordion 5" }
    ]

    const [activeAccordionItem, setActiveAccordionItem] = useState(null);

    return(
        <>
            <h3> Accordion </h3>
            {faqs.map( faq => (
                <AccordionItem
                    key = {faq.id}
                    title = {faq.title}
                    content = {faq.content}
                    isOpen={activeAccordionItem === faq.id}
                    handleToggle={() => handleToggle(faq.id)}
                />
            ))}
        </>
    )

    /***************
        FUNZIONI
    ****************/
    function handleToggle(idAccordion) {
        setActiveAccordionItem(prev =>
            prev === idAccordion ? null : idAccordion
        );
    }
}

export default AccordionList;