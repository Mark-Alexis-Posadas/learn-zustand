import { useEffect } from "react";
import Button from "../Button/Button";
import useButtonStore from "../../store/ButtonContex";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";

library.add(fas);

export default function Alert({
  borderColor,
  backgroundColor,
  textTitle,
  textDescription,
  textColor,
  buttonColor, // new prop for specifying button color
}) {
  const { changeButtonColor } = useButtonStore();

  // Set the button color when the component mounts
  useEffect(() => {
    changeButtonColor(buttonColor);
  }, [buttonColor, changeButtonColor]);

  return (
    <div
      className={`flex h-[149px] w-[886px] flex-col justify-between rounded border p-3 ${borderColor} ${backgroundColor}`}
    >
      <h1 className={`${textColor} text-base font-medium`}>
        <FontAwesomeIcon
          icon="fa-solid fa-arrow-right"
          className="h-[13px] w-[13px] pr-2"
        />
        {textTitle}
      </h1>
      <p className={`${textColor} text-xs font-light`}>{textDescription}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Button
            buttonText="Button"
            smallProp={`bg-white border-${buttonColor}-300 text-${buttonColor}-500 w-[121px] h-[33px] font-light text-xs mr-4`}
          />

          <Button
            buttonText="Button"
            smallProp="bg-white w-[121px] h-[33px] font-light text-xs"
          />
        </div>
        <div className="flex items-center">
          <Button
            buttonText="Button"
            smallProp={`bg-white border-${buttonColor}-300 text-${buttonColor}-500 w-[121px] h-[33px] font-light text-xs mr-4`}
          />

          <Button
            buttonText="Button"
            smallProp="bg-white w-[121px] h-[33px] font-light text-xs"
          />
        </div>
      </div>
    </div>
  );
}
