import { useState } from "react"

export function TodoInput(props) {
  const { handleAddTodo } = props
  const [inputValue, setInputValue] = useState('')

  return (
    <div className="input-container">
      <input type="text" value={inputValue} onChange={(e) => {
        setInputValue(e.target.value)
      }} placeholder="Add Task"  />

      <button onClick={() => {
        handleAddTodo(inputValue)
        setInputValue('')
      }}>Add Todo</button>
    </div>
  )
}