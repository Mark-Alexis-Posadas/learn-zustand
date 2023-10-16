import DisplayTodo from "./DisplayTodo";
import TodosControl from "./TodosControl";

const Todo = () => {
  return (
    <div className="container mx-auto mt-5">
      <DisplayTodo />
      <TodosControl />
    </div>
  );
};

export default Todo;
