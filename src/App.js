import React from 'react';
import { ToDoTitle } from './components/ToDoTitle';
import { ToDoSearch } from './components/ToDoSearch';
import { ToDoList } from './components/ToDoList';
import { ToDoItem } from './components/ToDoItem';

const defaultTodos = [
  { text: 'Aceite', completed: true },
  { text: 'Arroz', completed: false },
  { text: 'Azucar', completed: true },
  { text: 'Avena', completed: false },
  { text: 'Agua de tubo que vende droga en la carretera, pero no le digan a nadie', completed: false },
  { text: 'La moneda es una pieza de un material resistente, de peso y composición uniforme, normalmente de metal acuñado en forma de círculo y con los distintivos elegidos por la autoridad emisora, que se emplea como medida de cambio (dinero) por su valor legal o intrínseco y como unidad de cuenta.1​ También se llama moneda a la divisa de curso legal de un Estado. Su nombre en lenguas romances proviene del latín moneta, debido a que la casa en donde se acuñaban en Roma estaba anexa al templo de Juno Moneta, diosa de la Memoria, encontrándose esta actividad bajo su protección.2​3​ La ciencia que estudia y clasifica las monedas físicas, metálicas o de material similar, se denomina numismática. El lugar donde se realiza la acuñación de monedas se conoce con el nombre de ceca o casa de moneda. El nombre proviene de una voz del árabe clásico (sikkah), que significa troquel -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------.4​', completed: false },
];

function App() {
  return (
    <>
      <ToDoTitle total={16} completed={2}/>
      <ToDoSearch/>
      <ToDoList>
        {defaultTodos.map(todo => (
          <ToDoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </ToDoList>
    </>
  )
}

export default App;
