import { useState, useEffect, useRef } from "react";
import TrendPopUp from "./PopUp"; // Rename the PopUp component
import useStore from "./useStore";
export default function TwitterTrends() {
  const containerRef = useRef(null);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });

  const { initial, isVisible, setIsVisible } = useStore((state) => {
    return {
      initial: state.initialState,
      isVisible: state.isVisible,
      setIsVisible: state.setIsVisible,
    };
  });

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        // Clicked outside the container, hide the content
        if (isVisible) {
          setIsVisible();
        }
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isVisible, setIsVisible]);

  return (
    <div className="relative">
      <ul
        className="bg-gray-700 p-3 rounded-md container mx-auto mt-10"
        ref={containerRef}
      >
        {initial.map((data) => (
          <li
            key={data.id}
            className="p-4 flex items-start justify-between mb-3 cursor-pointer hover:bg-gray-900"
          >
            <div className="flex flex-col text-white">
              <span>{data.category}</span>
              {data.title}
            </div>
            <i
              className="fa-solid fa-ellipsis text-white hover:bg-blue-300 hover:rounded-2xl p-2 hover:text-blue-900"
              onClick={(e) => {
                // Calculate the position of the ellipsis icon relative to the document
                const iconRect = e.target.getBoundingClientRect();
                const top = iconRect.top + window.scrollY;
                const left = iconRect.right + window.scrollX;

                setPopupPosition({ top, left });
                setIsVisible();
              }}
            ></i>
          </li>
        ))}
      </ul>
      {isVisible && (
        <TrendPopUp top={popupPosition.top} left={popupPosition.left} />
      )}
    </div>
  );
}
