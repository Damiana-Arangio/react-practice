/*
  ESERCIZIO
  Crea un array di studenti e renderizzali in una lista/card.

  Ogni studente deve mostrare:
  - nome
  - età

  Dati da usare:

    const students = [
    { id: 1, name: "Marco", age: 22 },
    { id: 2, name: "Giulia", age: 24 },
    { id: 3, name: "Luca", age: 21 }
    ];

    Obiettivo:

    Marco - 22 anni
    Giulia - 24 anni
    Luca - 21 anni
*/

function StudentsList() {

    /*************
        COSTANTI
    *************/
    const students = [
        { id: 1, name: "Marco", age: 22 },
        { id: 2, name: "Giulia", age: 24 },
        { id: 3, name: "Luca", age: 21 }
    ];

    /*************
        RENDER
    *************/
    return(
        <>
            <h3> Lista Studenti </h3>
            <ul>
                {students.map( student =>
                    <li key={student.id}> 
                        {student.name} - {student.age} 
                    </li>
                )}
            </ul>
            
        </>
    )
}

export default StudentsList;