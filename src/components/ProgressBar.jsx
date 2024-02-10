import "./ProgressBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPlaneDeparture,
} from "@fortawesome/free-solid-svg-icons";

const cssObj = {
  1: "move-to-start",
  2: "move-to-middle",
  3: "move-to-middle",
  4: "move-to-middle",
  5: "move-to-right",
  6: "move-to-right",
  7: "move-to-right",
};

export const ProgressBar = ({ formState }) => {
  return (
    <section className="position-relative pt-5 mx-5 progress-box">
      <hr className="my-0 position-absolute top-50 start-0 translate-middle-y w-100"></hr>
      <FontAwesomeIcon
        className={`left fs-3 app-text ${cssObj[formState]}`}
        icon={faPlaneDeparture}
      />
      {formState > 1 && (
        <FontAwesomeIcon
          className="position-absolute top-50 start-0 translate-middle-y text-success fs-4 opacity-75"
          icon={faCircleCheck}
        />
      )}
      <div
        className={`position-absolute top-50 start-50 translate-middle ${
          formState < 2 ? "perfect-circle" : ""
        }`}
      >
        {formState > 4 && (
          <FontAwesomeIcon
            className="text-success opacity-75 fs-4"
            icon={faCircleCheck}
          />
        )}
      </div>
      {formState < 5 && (
        <div className="perfect-circle position-absolute top-50 end-0 translate-middle-y"></div>
      )}
      <div className="fs-12 position-absolute bottom-0 left-center app-text">
        Your Preferences
      </div>
      <div className="fs-12 position-absolute bottom-0 start-50 translate-middle-x app-text">
        Education-details
      </div>
      <div className="fs-12 position-absolute bottom-0 right-center app-text">
        Exam Status
      </div>
    </section>
  );
};
