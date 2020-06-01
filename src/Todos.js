import React from 'react';

function Todos({todos, deleteTodo}) {
    const todosList = todos.length ? (
        todos.map(todo => {
            return (
                <div onClick={() => {deleteTodo(todo.id)}} className="collection-item center" key={todo.id}>
                    <span>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center">You have no todo's left, yay!</p>
    );
    return (
    <div className="todos collection">
        {todosList}
    </div>
    );
}

export default Todos;