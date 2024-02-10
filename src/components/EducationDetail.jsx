import {
  faHandsClapping,
  faPlaneDeparture,
} from "@fortawesome/free-solid-svg-icons";
import "./EducationDetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProgressBar } from "./ProgressBar";
import { StudyAbroadForm } from "./StudyAbroadFrorm";
export const EducationDetail = () => {
  return (
    <div>
      <section>
        <ProgressBar />
      </section>
      <section className="px-5 mt-4">
        <StudyAbroadForm />
      </section>
    </div>
  );
};
