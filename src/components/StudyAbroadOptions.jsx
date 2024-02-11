import { FORM_OPTIONS } from "../constants";
import { Button } from "./shared/Button";

export const StudyAbroadOptions = ({ formState, handleCLick }) => {
  let optionClass = "mx-4 g-3 mt-4 row";
  return (
    <div>
      <p className="text-center mx-3 mt-4">{FORM_OPTIONS[formState].title}</p>
      <div
        className={
          formState === 5
            ? optionClass + " row-cols-1"
            : optionClass + " row-cols-2"
        }
      >
        {FORM_OPTIONS[formState].options.map((opt) => (
          <div key={opt.title} className="col">
            <Button
              handleCLick={handleCLick}
              title={opt.title}
              icon={opt?.icon}
              light={true}
              centerElements={formState !== 5}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
