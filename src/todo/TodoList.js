import React from 'react'
import {ListGroup} from 'react-bootstrap';

import TodoItem from './TodoItem';


function TodoList(props) {
    const todos = props.todos;

    return (
        <section className="Todo-list">
            <ListGroup>
                {todos.map((todo, i) => <TodoItem
                    key={i}
                    todo={todo}
                    onEdit={() => props.editTodo(todo)}
                    onRemove={() => props.removeTodo(todo)}
                    done={() => props.doneTodo(todo)}
                />)}
            </ListGroup>
        </section>
    )
}

export default TodoList;
