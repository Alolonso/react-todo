import '../styles/ToDoCounter.css';

function ToDoCounter ({total, completed}) {
    return (
        <h2 className="TodoCounter">
            You have completed <span>{completed}</span> tasks of <span>{total}</span>
        </h2>
    );
}

export {ToDoCounter};