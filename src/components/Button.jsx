import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Button = ({
  title,
  icon,
  handleCLick,
  light,
  centerElements = true,
}) => {
  let btnClass =
    "d-flex justify-content-center align-items-center btn app-btn d-block w-100";
  btnClass =
    btnClass +
    (light
      ? " text-primary border-primary gap-1 light-button"
      : " gradient text-light gap-3") +
    (centerElements ? " justify-content-center" : " justify-content-between");
  return (
    <div className="w-100">
      <button className={btnClass} onClick={handleCLick}>
        <span className={light ? "fw-bold fs-12" : "fw-bold"}>{title}</span>
        {icon && (
          <FontAwesomeIcon className={light ? "fs-5" : "fs-3"} icon={icon} />
        )}
      </button>
    </div>
  );
};
