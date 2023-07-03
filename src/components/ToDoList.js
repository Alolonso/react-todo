import '../styles/ToDoList.css'

function ToDoList ({children}) {
    return (
        <ul className="TodoList">
            {children}
        </ul>
    )
}

export {ToDoList};