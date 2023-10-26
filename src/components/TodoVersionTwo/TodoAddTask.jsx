export default function TodoAddTask() {
  return (
    <form className="bg-gray-40 shadow-lg rounded-lg p-8 w-[600px] absolute z-20">
      <h2>Add Todo</h2>
      <div className="flex flex-col items-start mb-3">
        <label>Title</label>
        <input type="text" className="w-full" />
      </div>
      <div className="flex flex-col items-start">
        <label>Status</label>
        <select className="w-full">
          <option value="Incomplete">Incomplete</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div className="flex items-center">
        <button>Add Task</button>
        <button>Cancel</button>
      </div>
    </form>
  );
}
