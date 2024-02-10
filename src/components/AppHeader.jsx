import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/img/download.svg";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const AppHeader = () => {
  return (
    <div>
      <header
        className="d-flex justify-content-between align-items-center px-2 bg-app-dark"
      >
        <img height="50" src={logo} alt="Search Technology logo" />
        <FontAwesomeIcon
          className="text-white fs-3 cursor-pointer"
          icon={faBars}
        />
      </header>
    </div>
  );
};
