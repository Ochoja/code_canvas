import { Header } from './components/Header';
import { TodoList } from './components/TodoList';
import { Tabs } from './components/Tabs';
import { TodoInput } from './components/TodoInput';
import { useState } from 'react';

export default function App() {
  const [todos, setTodos] = useState([
    { input: 'Hello! Add your first todo', complete: true },
  ]);
  const [selectedTab, setSelectedTab] = useState('All');

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index) {
    const newTodos = todos.filter((todo, todoIndex) => todoIndex !== index);
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
      />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  );
}
