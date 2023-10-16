import useStore from "./useStore";
const DisplayTodo = () => {
  const { todos, deleteTodo, toggleTodo } = useStore((state) => {
    return {
      todos: state.todos,
      deleteTodo: state.deleteTodo,
      toggleTodo: state.toggleTodo,
    };
  });
  return (
    <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      {todos.map((todo) => (
        <li
          className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600 flex items-center justify-between"
          key={todo.id}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.text}
          <button
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            onClick={() => deleteTodo(todo.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default DisplayTodo;
