import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Button = ({ title, icon, handleCLick }) => {
  return (
    <div>
      <button
        className=" d-flex gap-3 justify-content-center 
      align-items-center text-light btn app-btn gradient w-100"
      >
        <span className="fw-bold">{title}</span>
        {icon && <FontAwesomeIcon className="fs-3" icon={faArrowRight} />}
      </button>
    </div>
  );
};
