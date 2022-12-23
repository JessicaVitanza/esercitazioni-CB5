import './todolist.scss';
import { Button } from '../../atoms/button/Button';
import { Fragment, useState } from 'react';

function SingleItem(text){
    const [isDone, setIsDone] = useState(true);

    const handleClick = () => {
        setIsDone(!isDone);
    };

    return (
        <li className='todo'>
        <h4>{text}</h4>
        <Button variant="done" onClick={handleClick}>✏️</Button>
        <p style={{ display: isDone ? 'none' : 'block' }}>Fatto!</p>
        </li>
 )
}

export const TodoList = () => {

    const items = [
        { label: 'Comprare il pane', id: 1},
        { label: 'Chiamare la nonna', id: 2},
        { label: 'Andare dalla veterinaria', id: 3},
        { label: "Fare l'iscrizione in palestra", id: 4},
        { label: 'Prenotare biglietti aereo', id: 5},
        { label: 'Cucinare torta di compleanno', id: 6}
    ];


    return(
        <Fragment>
            <ul className="Container" >
               {items.map(function (item){
                 return SingleItem(item.label)
               })
               }
            </ul>
        </Fragment>
    )
   
}