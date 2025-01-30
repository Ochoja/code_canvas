import {TodoCard} from './TodoCard'

export function TodoList(props) {
  const {todos, tab} = props
  const filterTodosList = tab === 'All' ? todos :
                            tab === 'Completed' ? todos.filter(val => val.complete) :
                            todos.filter(val => !val.complete)

  return (
  <>
    {filterTodosList.map((todo, todoIndex) => {
      return(
        <TodoCard todo={todo} key={todoIndex} todoIndex={todoIndex}></TodoCard>
      )
    })}
  </>
  )
}