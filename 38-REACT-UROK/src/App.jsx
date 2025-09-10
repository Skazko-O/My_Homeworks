import Card from 'antd/es/card/Card'
import { useEffect, useRef, useState } from 'react'
import './assets/css/app.scss'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { ToastContainer } from 'react-toastify'
import { toast } from 'react-toastify'

export default function App() {
  const [todoList, setTodoList] = useState([])
  const [todoCnt, setTodoCnt] = useState([0])
  const isFetched = useRef(false)

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

  /*const keyHandler = (e) => {
    console.log(e.code);
  }*/

  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    const todos = []
    data.forEach(el => todos.push(el.title))
    setTodoList(todos)
  }
  useEffect(() => {
    if (!isFetched.current) {
      isFetched.current = true
      fetchData()
    }
    
  }, [])

  /* useEffect(() => {
      console.log('Effect done');
      setTodoCnt(todoList.length)
      document.addEventListener('keydown', keyHandler)
  
      const timeoutID = setTimeout (()=>{
  
      }, 2*60*1000 )
  
      return () => {
        document.removeEventListener('keydown', keyHandler)
        clearTimeout(timeoutID)
      }
    }, [todoList]) */

  return (
    <>
      <Card style={{ width: 600, marginInline: 'auto' }}>
        <TodoForm onAddTodo={onAddTodoHandler} />
        <p>Total items:{todoCnt}</p>
        <TodoList list={todoList} onDelete={deleteHandler} />
      </Card>
      <ToastContainer />
    </>
  )
}
