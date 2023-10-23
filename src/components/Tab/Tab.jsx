import useTab from "./useTab";
export default function Tab() {
  const { tabs, activeTab, setActiveTab } = useTab((state) => {
    return {
      tabs: state.tabs,
      activeTab: state.activeTab,
      setActiveTab: state.setActiveTab,
    };
  });
  return (
    <>
      <ul className="flex items-center">
        {tabs.map((tab, index) => {
          return (
            <li
              key={index}
              onClick={() => setActiveTab(index)}
              className={`p-3 text-dark ${
                activeTab === index ? "bg-green-400 text-green-100" : ""
              }`}
            >
              {tab.title}
            </li>
          );
        })}
      </ul>

      <div>{tabs[activeTab].content}</div>
    </>
  );
}
