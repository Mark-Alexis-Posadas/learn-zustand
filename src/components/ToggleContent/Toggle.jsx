import useToggle from "./useToggle";

const Toggle = () => {
  const { isToggle, setIstoggle, isToggleText } = useToggle((state) => {
    return {
      isToggle: state.isToggle,
      setIstoggle: state.setIsToggle,
      isToggleText: state.isToggleText,
    };
  });
  return (
    <div className="container mx-auto mt-6 bg-red-200 p-6">
      <button
        onClick={setIstoggle}
        className="bg-green-400 hover:bg-green-500 p-3 rounded-md w-20 text-white font-bold"
      >
        {isToggleText}
      </button>
      {isToggle && <p>Content</p>}
    </div>
  );
};

export default Toggle;
