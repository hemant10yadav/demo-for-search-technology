import { useState } from "react";
import "./EducationDetail.css";
import { ProgressBar } from "./ProgressBar";
import { StudyAbroadForm } from "./StudyAbroadFrorm";
export const EducationDetail = () => {
  const [formState, setFormState] = useState(0);

  return (
    <div>
      <section>
        <ProgressBar formState={formState} />
      </section>
      <section className="mt-4">
        <StudyAbroadForm formState={formState} setFormState={setFormState} />
      </section>
    </div>
  );
};
