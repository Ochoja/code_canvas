import { TodoCard } from './TodoCard';

export function TodoList(props) {
  const { todos, selectedTab, handleDeleteTodo } = props;
  const filterTodosList =
    selectedTab === 'All'
      ? todos
      : selectedTab === 'Completed'
      ? todos.filter((val) => val.complete)
      : todos.filter((val) => !val.complete);

  return (
    <>
      {filterTodosList.map((todo, todoIndex) => {
        return (
          <TodoCard
            todo={todo}
            key={todoIndex}
            {...props}
            todoIndex={todoIndex}></TodoCard>
        );
      })}
    </>
  );
}
