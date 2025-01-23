export function Header(todos) {
  const todoLength = todos.length

  return (
  <>
    <header>
      <div>

      </div>

      <h1 className="text-gradient">You have {todoLength} open tasks</h1>
    </header>
  </>
  )
}