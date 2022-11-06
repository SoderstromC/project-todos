/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import todo from 'reducers/todo'

const NewTodo = () => {
  const todoList = useSelector((store) => store.todo.items)
  const [newTodo, setNewTodo] = useState('')
  const dispatch = useDispatch()
  const onFormSubmit = (event) => {
    event.preventDefault()
    const newTodoBullet = { id: Date.now().toString(),
      name: newTodo,
      isCompleted: false }
    dispatch(todo.actions.addItem(newTodoBullet))
    setNewTodo('')
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }

  return (
    <form onSubmit={onFormSubmit}>
      <label>
        New Todo:
        <input type="text" value={newTodo} onChange={(event) => setNewTodo(event.target.value)} />
      </label>
      <button type="submit">Add Todo</button>
    </form>
  )
}

export default NewTodo