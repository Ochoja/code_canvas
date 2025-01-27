export function Tabs (props){
  const tabs = ['All', 'Open', 'Completed']
  const {todos} = props

  return (
    <nav className="tab-container">
      {tabs.map((tab, tabIndex) => {
        const numofTodos = tab === 'All' ? todos.length : tab === 'Open' ? todos.filter(todo => !todo.complete).length : todos.filter(todo => todo.complete).length
        return (
          <button key={tabIndex} className="tab-button">
            <h4>{tab} <span>({numofTodos})</span></h4>
          </button>
        )
      })}
    </nav>
  )
}