// Accordion.js

import useAccordionStore from "./useAccordion";
import accordionData from "./data";

export default function Accordion() {
  const activeAccordionId = useAccordionStore(
    (state) => state.activeAccordionId
  );
  const setActiveAccordionId = useAccordionStore(
    (state) => state.setActiveAccordionId
  );

  const toggleAccordion = (id) => {
    setActiveAccordionId(id === activeAccordionId ? null : id);
  };

  return (
    <div className="container mx-auto p-5">
      {accordionData.map((data) => {
        const isActive = data.id === activeAccordionId;

        return (
          <div className="my-4" key={data.id}>
            <h1
              className={`bg-red-500 cursor-pointer p-5 text-white ${
                isActive ? "active" : ""
              }`}
              onClick={() => toggleAccordion(data.id)}
            >
              {data.title}
            </h1>
            {isActive && <p className="my-5">{data.body}</p>}
          </div>
        );
      })}
    </div>
  );
}
