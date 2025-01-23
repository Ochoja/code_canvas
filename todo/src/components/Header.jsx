export function Header(props) {
  const {todos} = props
  const todosLength = todos.length
  const task = todosLength > 1 ? 'tasks' : 'task'
  

  return (
  <>
    <header>
      <h1 className="text-gradient">You have {todosLength} open {task}</h1>
    </header>
  </>
  )
}