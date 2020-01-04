import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./header/Header";
import TodoList from "./todo/TodoList";
import {Button, Form, InputGroup} from "react-bootstrap";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            value: ''
        };

        this.handleInput = this.handleInput.bind(this);
        this.addTodoToState = this.addTodoToState.bind(this);
        this.editTodo = this.editTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.doneTodo = this.doneTodo.bind(this);
    }

    // Capturar los eventos de escritura del input
    handleInput(event) {
        this.setState({value: event.target.value})
    }

    // Añade una nueva tarea a nuestra lista
    addTodoToState() {
        if (this.state.value.trim()) {
            const newTodo = this.createTodo(this.state.value);
            this.setState({
                value: '',
                todos: [...this.state.todos, newTodo]
            })
        }
    }

    // Crea el objeto tarea de 0
    createTodo(name) {
        return {
            name: name,
            done: false
        }
    }

    // Edita el nombre de una tarea y la guarda en la lista
    editTodo(todo) {
        const newName = prompt('Edit Todo', todo.name);
        if (newName) {
            const todosState = this.state.todos;
            const index = todosState.findIndex((t) => t.name === todo.name);
            todosState[index].name = newName;
            this.setState({todos: todosState});
        }
    }

    // Pregunta si estamos seguros de borrar una tarea y en caso afirmativo, lo borramos de la lista
    removeTodo(todo) {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Are you sure to remove ' + todo.name + '?')) {
            const todosState = this.state.todos;
            const index = todosState.findIndex((t) => t.name === todo.name);
            todosState.splice(index, 1);
            this.setState({todos: todosState});
        }
    }

    // Cambiar la tarea a realizada
    doneTodo(todo) {
        const todosState = this.state.todos;
        const index = todosState.findIndex((t) => t.name === todo.name);
        todosState[index].done = true;
        this.setState({todos: todosState});
    }

    render() {
        const {todos, value} = this.state;
        return (
            <div className="App">
                <Header count={todos.length}/>
                <div className="container">
                    <InputGroup>
                        <Form.Control onChange={this.handleInput} value={value}/>
                        <InputGroup.Append>
                            <Button variant="success" onClick={() => this.addTodoToState()}>Primary</Button>
                        </InputGroup.Append>
                    </InputGroup>
                    <br/>
                    <TodoList todos={todos}
                              editTodo={(todo) => this.editTodo(todo)}
                              removeTodo={(todo) => this.removeTodo(todo)}
                              doneTodo={(todo) => this.doneTodo(todo)}
                    />
                </div>
            </div>
        );
    }
}

export default App;
