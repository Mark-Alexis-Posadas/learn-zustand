import useCounter from "./useCounter";
const Counter = () => {
  const count = useCounter((state) => state.count);
  const incrementCount = useCounter((state) => state.incrementCount);
  const decrementCount = useCounter((state) => state.decrementCount);
  const resetCount = useCounter((state) => state.resetCount);
  return (
    <div className="container mt-5 mx-auto">
      <h1 className="font-bold text-[6rem]">{count}</h1>
      <button
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        onClick={incrementCount}
      >
        increment
      </button>
      <button
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        onClick={decrementCount}
      >
        decrement
      </button>
      <button
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        onClick={resetCount}
      >
        reset
      </button>
    </div>
  );
};

export default Counter;
