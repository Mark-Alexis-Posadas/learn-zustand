import { useEffect } from "react";
import useFilterName from "./useFilterName";

const FilterName = () => {
  const { filterName, setFilterName, filteredNames, filterNames } =
    useFilterName((state) => ({
      filterName: state.filterName,
      setFilterName: state.setFilterName,
      filteredNames: state.filteredNames,
      filterNames: state.filterNames,
    }));

  // Call filterNames function when filterName changes
  useEffect(() => {
    filterNames();
  }, [filterName, filterNames]);

  return (
    <div>
      <h1>Filter Names</h1>
      <input
        type="text"
        placeholder="Enter a name"
        onChange={(e) => setFilterName(e.target.value)}
        value={filterName}
        className="border-slate-500"
      />
      <ul>
        {filteredNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterName;
