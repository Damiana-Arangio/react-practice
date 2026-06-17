import { useState } from "react";
import SelectableButton from "./SelectableButton";

function SelectableList() {

    const items = [
        { id: 1, label: "pulsante1"},
        { id: 2, label: "pulsante2" },
        { id: 3, label: "pulsante3" },
        { id: 4, label: "pulsante4" },
        { id: 5, label: "pulsante5" }
    ]

    const [activeItem, setActiveItem] = useState(null);

    return(

        <>
            <h3> Selectable List </h3>
            {items.map(item => (
                <SelectableButton
                    key = {item.id}
                    label = {item.label}
                    isActive={activeItem === item.id}
                    handleSelect={() => handleSelect(item.id)}
                />
            ))}
        </>
    )

    /****************
        FUNZIONI
    *****************/
    function handleSelect(id) {
        setActiveItem(id);
    }
}

export default SelectableList;