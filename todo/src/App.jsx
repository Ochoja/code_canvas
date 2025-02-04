import { Header } from './components/Header';
import { TodoList } from './components/TodoList';
import { Tabs } from './components/Tabs';
import { TodoInput } from './components/TodoInput';

import { useState, useEffect } from 'react';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [selectedTab, setSelectedTab] = useState('All');

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoList);
    handleSaveTodo(newTodoList);
  }

  function handleCompleteTodo(index) {
    const newTodos = [...todos];
    newTodos[index]['complete'] = true;
    setTodos(newTodos);
    handleSaveTodo(newTodos);
  }

  function handleDeleteTodo(index) {
    const newTodos = todos.filter((val, valIndex) => {
      return valIndex !== index;
    });
    setTodos(newTodos);
    handleSaveTodo(newTodos);
  }

  function handleSaveTodo(currentTodos) {
    localStorage.setItem('todo-app', JSON.stringify({ todos: currentTodos }));
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem('todo-app')) return;

    let db = JSON.parse(localStorage.getItem('todo-app'));
    setTodos(db.todos);
  }, []);

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
