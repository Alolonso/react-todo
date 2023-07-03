import '../styles/ToDoSearch.css';
import { SearchIcon } from '../icons/SearchIcon';


function ToDoSearch () {
    return (
        <>
            <div className='input-container'>
                <span className='searchIcon'>
                    <SearchIcon/>
                </span>
                <input placeholder='Search task'className='ToDoSearch'/>
            </div>
        </>
    );
}

export {ToDoSearch};