import {
  faArrowLeft,
  faArrowRight,
  faCloudSun,
  faHandsClapping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HemantScrollableContent } from "./HemantScrollableContent";
import { Button } from "./Button";
import { COUNTRIES, COURSES, FORM_OPTIONS } from "../constatnts";
import { useState } from "react";
import { Input } from "./Input";

export const StudyAbroadForm = ({ formState, setFormState }) => {
  let optionClass = "px-4 g-3 mt-4 row";
  const [selectedWidgetIndex, setSelectedWidgetIndex] = useState(1);
  const handleCLick = () => {
    setFormState(++formState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div>
        {[0, 1].includes(formState) && (
          <div className="mx-3">
            {formState == 0 && (
              <div className="text-center fs-4 fw-bold">
                <FontAwesomeIcon className="app-text" icon={faHandsClapping} />,
                select your dream country to study abroad
              </div>
            )}

            {formState == 1 && (
              <div className="text-center">
                <div>
                  <FontAwesomeIcon
                    className="app-text me-2"
                    icon={faCloudSun}
                  />
                  September is indeed beautiful in UK!
                </div>
                <div className="text-center fs-5 fw-bold px-5 mt-2">
                  What do you want to pursue?
                </div>
              </div>
            )}

            <div className="mt-5">
              <HemantScrollableContent
                selectedWidgetIndex={selectedWidgetIndex}
                setSelectedWidgetIndex={setSelectedWidgetIndex}
                widgetData={formState == 0 ? COUNTRIES : COURSES}
              />
            </div>
          </div>
        )}

        {[2, 3, 4, 5, 6].includes(formState) && (
          <div style={{ minHeight: "256px" }}>
            <p className="text-center mx-3 mt-4">
              {FORM_OPTIONS[formState].title}
            </p>
            <div
              className={
                formState == 5
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
                    centerElements={formState != 5}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {formState == 7 && (
          <div className="mx-3">
            <p className="fs-3 fw-bolder">
              Cheers! You're just one step away fro getting started &#129321;
            </p>
            <form onSubmit={handleSubmit}>
              <Input type="text" label="Name" />
              <Input type="email" label="Email" />
              <Input type="number" label="Phone Number" />
            </form>
          </div>
        )}
      </div>

      <div className="d-flex gap-5 mt-5 align-items-center px-3">
        <div className="d-flex gap-3 align-items-center">
          <FontAwesomeIcon className="fs-3" icon={faArrowLeft} />
          <span className="fw-bold">Back</span>
        </div>
        <div className="flex-grow-1">
          <Button
            title="Continue"
            handleCLick={handleCLick}
            icon={faArrowRight}
          ></Button>
        </div>
      </div>
    </div>
  );
};
