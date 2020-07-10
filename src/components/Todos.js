import React from 'react';
import './stylesheets/Todos.css';

function Todos(props) {
    return (
        <div>
            <div className="list">
                <p>{props.todoList}</p>
                <button onClick={() => props.deleteItem(props.id)}>X</button>
            </div>
        </div>
    );
}

export default Todos;
