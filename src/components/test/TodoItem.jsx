import React from 'react'

export function TodoItem({todo}) {
  return (
    <li>
        <label> 
            <input type="checkbox" checked={todo.completed} />
            {todo.name} 
        </label>
    </li>
  )
}
