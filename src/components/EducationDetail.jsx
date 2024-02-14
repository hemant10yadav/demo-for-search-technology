import { useState } from "react";
import { ProgressBar } from "./ProgressBar";
import { FORM_OPTIONS } from "../constants";
import { StudyAbroadForm } from "./StudyAbroadForm";
export const EducationDetail = () => {
  const [formState, setFormState] = useState(0);

  return (
    <div className="row g-0 justify-content-center">
      <div className="col-12 col-sm-8 col-lg-6 col-xl-4">
        <section>
          {formState < FORM_OPTIONS.length && (
            <ProgressBar formState={formState} />
          )}
        </section>
        <section className="mt-4">
          <StudyAbroadForm formState={formState} setFormState={setFormState} />
        </section>
      </div>
    </div>
  );
};
