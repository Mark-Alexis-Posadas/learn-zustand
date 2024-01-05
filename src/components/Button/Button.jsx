import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";

library.add(fas);
export default function Button({
  buttonText,
  regularProp,
  smallProp,
  disabled,
}) {
  return (
    <button
      className={`${regularProp} ${smallProp}
      ${
        disabled
          ? "cursor-not-allowed border-slate-400 bg-slate-300 text-slate-400"
          : ""
      } 
      flex items-center justify-center rounded border px-5 py-3 font-medium`}
    >
      <FontAwesomeIcon
        icon={["fas", "arrow-right"]}
        className="h-[13px] w-[13px] pr-2"
      />

      {buttonText}
      <FontAwesomeIcon
        icon={["fas", "arrow-right"]}
        className="h-[13px] w-[13px] pl-2"
      />
    </button>
  );
}
