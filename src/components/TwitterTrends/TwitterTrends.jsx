import useStore from "./useStore";
export default function TwitterTrends() {
  const { initial } = useStore((state) => {
    return {
      initial: state.initialState,
    };
  });
  return (
    <ul className="bg-gray-700 p-3 rounded-md container mx-auto mt-10">
      {initial.map((data) => (
        <li
          key={data.id}
          className="p-4 flex items-start justify-between mb-3 cursor-pointer hover:bg-gray-900"
        >
          <div className="flex flex-col text-white">
            <span>{data.category}</span>
            {data.title}
          </div>
          <i className="fa-solid fa-ellipsis text-white hover:bg-blue-300 hover:rounded-2xl p-2 hover:text-blue-900"></i>
        </li>
      ))}
    </ul>
  );
}
