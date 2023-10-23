import useStore from "./useStore";

export default function RemoveElement() {
  const { fruits, removeElement } = useStore((state) => {
    return {
      fruits: state.initialState,
      removeElement: state.removeElement,
    };
  });
  return (
    <div className="container mx-auto mt-5">
      {fruits.map((fruit) => (
        <div key={fruit.id} className="bg-green-300 mb-3 p-4 rounded-xl">
          <h2 className="font-bold text-purple-600">Name: {fruit.name}</h2>
          <h2 className="font-bold text-purple-600">Amount: {fruit.amount}</h2>
        </div>
      ))}
      <button
        onClick={removeElement}
        className="text-purple-400 bg-green-300 rounded-full p-3 font-bold hover:text-purple-600 hover:bg-green-400"
      >
        Remove Second Element
      </button>
    </div>
  );
}
