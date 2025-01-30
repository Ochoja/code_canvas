import { Header } from "./components/Header"
import { TodoList } from './components/TodoList'
import { Tabs } from './components/Tabs'
import { TodoInput } from './components/TodoInput'
import { useState } from 'react'

export default function App() {
  // const todos = [
  //                 {input: 'Clean up the kitchen', complete: true},
  //                 {input: 'Wash some plates', complete: false},
  //                 {input: 'Do the dishes', complete: true}
  //               ]

  const [todos, setTodos] = useState([{input: 'Clean up the kitchen', complete: true}])
  const [tab, setTab] = useState('All')

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, {input: newTodo, complete: false}]
    setTodos(newTodoList)
  }

  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} setTab={setTab} />
      <TodoList todos={todos} tab={tab}/>
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  )
}