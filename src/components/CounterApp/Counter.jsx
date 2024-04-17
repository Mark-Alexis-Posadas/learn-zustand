import Button from "./Button";
import useCounter from "./useCounter";

const Counter = () => {
  const count = useCounter((state) => state.count);

  return (
    <div className="container mt-5 mx-auto">
      <h1 className="font-bold text-[6rem]">{count}</h1>
      <Button />
    </div>
  );
};

export default Counter;
