import { faHandsClapping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HemantScrollableContent } from "./HemantScrollableContent";
import { Button } from "./Button";

export const StudyAbroadForm = () => {
  return (
    <div>
      <div className="text-center fs-4 fw-bold">
        Hey <FontAwesomeIcon className="app-text" icon={faHandsClapping} />,
        select your dream country to study abroad
      </div>
      <div className="mt-4">
        <HemantScrollableContent />
      </div>
      <div className="mt-5">
        <Button title="Continue" icon={true}></Button>
      </div>
    </div>
  );
};
