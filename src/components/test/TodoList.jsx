import React, { Fragment } from 'react'
import { TodoItem } from './TodoItem'
export  function TodoList({ todos }) {
   
    return (
        <Fragment>
            <h1>Todo List</h1>

            {todos.map((todo) => (
                <ul>
                    <TodoItem key={todo.id} todo={todo} />
                </ul>
            ))}
         
             
        </Fragment>
    )
}
