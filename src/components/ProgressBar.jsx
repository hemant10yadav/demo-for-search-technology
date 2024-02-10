import "./ProgressBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";

export const ProgressBar = () => {
  return (
    <section className="position-relative pt-5 mx-5 progress-box">
      <hr className="my-0 position-absolute top-50 start-0 translate-middle-y w-100"></hr>
      <FontAwesomeIcon
        className="position-absolute top-50 start-0 translate-middle-y fs-3 app-text"
        icon={faPlaneDeparture}
      />
      <div className="perfect-circle start-50 translate-middle"></div>
      <div className="perfect-circle end-0 translate-middle-y"></div>
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
