import { useEffect, useRef } from "react";
import useToggle from "./useToggle";
const Toggle = () => {
  const { isToggle, isToggleText, setIsToggle } = useToggle();
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        // Clicked outside the container, hide the content
        if (isToggle) {
          setIsToggle();
        }
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isToggle, setIsToggle]);

  return (
    <div className="container mx-auto mt-6 bg-red-200 p-6" ref={containerRef}>
      <button
        onClick={setIsToggle}
        className="bg-green-400 hover-bg-green-500 p-3 rounded-md w-20 text-white font-bold"
      >
        {isToggleText}
      </button>
      {isToggle && <p>Content</p>}
    </div>
  );
};

export default Toggle;
