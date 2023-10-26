import TodoAddTask from "./TodoAddTask";

export default function Root() {
  return (
    <div className="container mx-auto text-center mt-10 flex flex-col items-center">
      <h1 className="font-bold uppercase text-gray-700 text-xl">Todo List</h1>
      <div className="flex items-center justify-between max-w-md w-full mt-10">
        <button className="bg-violet-500 text-white rounded-md py-2 px-6">
          Add Task
        </button>
        <select
          name=""
          id=""
          className="bg-gray-50 border border-gray-300 py-2 rounded-md px-3"
        >
          <option selected value="All">
            All
          </option>
          <option value="Incomplete">Incomplete</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <TodoAddTask />
    </div>
  );
}
