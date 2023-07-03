import '../styles/ToDoTitle.css';
import { ToDoCounter } from './ToDoCounter';

function ToDoTitle (props) {
    return (
        <>
            <header>
                <h1 className="header_h1">ToDos</h1>
                <h2 className="header_h2">Your tasks</h2>
                <p className="header_p">by Alolonso</p>
                <ToDoCounter total={props.total} completed={props.completed}/>
            </header>
        </>
    )
}

export {ToDoTitle};