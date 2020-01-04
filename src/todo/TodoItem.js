import React from 'react';
import {Button, Col, Container, FormCheck, ListGroupItem, Row} from "react-bootstrap";

import './TodoItem.css';

function TodoItem(props) {
    const {todo, onEdit, onRemove, done} = props;
    return (
        <ListGroupItem>
            <Container>
                <Row className="justify-content-around align-items-center">
                    <Col md="8">
                        <FormCheck className={todo.done && 'todo-done'} type="radio" label={todo.name}
                                   onChange={() => done()} value={todo.done}/>
                    </Col>
                    <Col>
                        <Button variant="primary" onClick={() => onEdit()}>Edit</Button>
                    </Col>
                    <Col>
                        <Button variant="danger" onClick={() => onRemove()}>Remove</Button>
                    </Col>
                </Row>
            </Container>
        </ListGroupItem>
    )
}

export default TodoItem;
