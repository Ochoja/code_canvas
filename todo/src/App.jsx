import { Header } from './components/Header';
import { TodoList } from './components/TodoList';
import { Tabs } from './components/Tabs';
import { TodoInput } from './components/TodoInput';
import { useState } from 'react';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [selectedTab, setSelectedTab] = useState('All');

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoList);
  }

  function handleCompleteTodo(index) {
    const newTodos = [...todos];
    newTodos[index]['complete'] = true;
    setTodos(newTodos);
  }

  function handleDeleteTodo(index) {
    const newTodos = todos.filter((val, valIndex) => {
      return valIndex !== index;
    });
    setTodos(newTodos);
  }

  return (
    <>
      <Header todos={todos} />
      <Tabs
        todos={todos}
        setSelectedTab={setSelectedTab}
        selectedTab={selectedTab}
      />
      <TodoList
        todos={todos}
        selectedTab={selectedTab}
        handleDeleteTodo={handleDeleteTodo}
        handleCompleteTodo={handleCompleteTodo}
      />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  );
}
