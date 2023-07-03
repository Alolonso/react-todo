import '../styles/ToDoItem.css';
import { CheckIcon } from '../icons/CheckIcon';
import { CloseIcon } from '../icons/CloseIcon';

function ToDoItem (props) {
    return (
        <li className="ToDoItem">
            <div className='ToDoItem-div-container'>
                <span className='ToDoItem-Icon ToDoItem-CheckIcon'>
                    <CheckIcon/>
                </span>
                <p>
                    {props.text}
                </p>
            </div>
            <span className='ToDoItem-Icon ToDoItem-CloseIcon'>
                <CloseIcon/>
            </span>
        </li>
    )
}

export {ToDoItem};