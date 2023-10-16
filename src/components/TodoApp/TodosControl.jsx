import { useState } from "react";
import useStore from "./useStore";
const TodosControl = () => {
  const addTodo = useStore((state) => state.addTodo);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <input
        className="block w-full p-4 pl-10 text-sm  border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type="text"
        value={text}
        placeholder="Add Todo..."
        onChange={(e) => setText(e.target.value)}
      />

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Add
      </button>
    </form>
  );
};

export default TodosControl;
