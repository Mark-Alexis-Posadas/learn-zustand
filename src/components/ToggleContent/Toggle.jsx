import useToggle from "./useToggle";

const Toggle = () => {
  const isToggle = useToggle((state) => state.isToggle);
  const setIstoggle = useToggle((state) => state.setIsToggle);

  return (
    <div>
      <button onClick={setIstoggle}>Toggle</button>
      {isToggle && <p>Content</p>}
    </div>
  );
};

export default Toggle;
