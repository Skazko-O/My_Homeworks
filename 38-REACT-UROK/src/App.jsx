import Card from 'antd/es/card/Card'
import { useState } from 'react'
import './assets/css/app.scss'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import {ToastContainer} from 'react-toastify'
import { toast } from 'react-toastify'

export default function App() {
  const [todoList, setTodoList] = useState([])

  const onAddTodoHandler = (TodoText) => {
    const newTodoList = [...todoList, TodoText]
    setTodoList(newTodoList)
    toast.success("New todo successfully addet")
  }

  const deleteHandler = (index) => {
    const newTodoList = [...todoList]
    newTodoList.splice(index, 1)
    setTodoList(newTodoList)
     toast.success("Todo successfully remove")
  }

  return (
    <>
      <Card style={{ width: 600, marginInline: 'auto' }}>
        <TodoForm onAddTodo={onAddTodoHandler} />
        <TodoList list={todoList} onDelete={deleteHandler} />
      </Card>
      <ToastContainer />
    </>
  )
}
