import useCounter from "./useCounter";

export default function Button() {
  const buttonText = useCounter((state) => state.buttonText);
  const handleClick = useCounter((state) => state.handleClick);
  return (
    <div>
      {buttonText.map((button, index) => (
        <button
          className={`text-white bg-gradient-to-r  hover:bg-gradient-to-br focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ${
            index === 2
              ? " bg-red-700 hover:bg-red-800 focus:ring-red-300  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              : "from-blue-500 via-blue-600 to-blue-700 focus:ring+-blue-300 dark:focus:ring-blue-800"
          }`}
          key={index}
          onClick={() => handleClick(index)}
        >
          {button}
        </button>
      ))}
    </div>
  );
}
