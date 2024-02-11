import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FORM_OPTIONS } from "../constants";
import { Button } from "./shared/Button";

export const StudyAbroadFormFooter = ({ formState, handleCLick }) => {
  return (
    <div className="d-flex gap-5 mt-5 align-items-center px-3">
      {formState > 0 && (
        <div
          className="d-flex gap-3 align-items-center cursor-pointer"
          onClick={() => handleCLick(true)}
        >
          <FontAwesomeIcon className="fs-3" icon={faArrowLeft} />
          <span className="fw-bold">Back</span>
        </div>
      )}

      <div className="flex-grow-1">
        <Button
          title={
            [2, 3, 5].includes(formState)
              ? "Next"
              : formState === FORM_OPTIONS.length
              ? "Start Journey"
              : "Continue"
          }
          handleCLick={() => handleCLick(false)}
          icon={faArrowRight}
        ></Button>
      </div>
    </div>
  );
};
