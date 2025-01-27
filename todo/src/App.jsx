import { Header } from "./components/Header"
import {TodoList} from './components/TodoList'
import {Tabs} from './components/Tabs'

export default function App() {
  const todos = [
                  {input: 'Clean up the kitchen', complete: true},
                  {input: 'Wash some plates', complete: false},
                  {input: 'Do the dishes', complete: true}
                ]

  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} />
      <TodoList todos={todos}  />
    </>
  )
}