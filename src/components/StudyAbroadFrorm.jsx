import {
  faArrowLeft,
  faArrowRight,
  faCloudSun,
  faHandsClapping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HemantScrollableContent } from "./HemantScrollableContent";
import { Button } from "./Button";
import { COUNTRIES, COURSES, FORM_OPTIONS } from "../constants";
import { useState } from "react";
import { Input } from "./Input";
import { MyModal } from "./OtpModal";

export const StudyAbroadForm = ({ formState, setFormState }) => {
  let optionClass = "mx-4 g-3 mt-4 row";
  const [selectedWidgetIndex, setSelectedWidgetIndex] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const handleCLick = (back) => {
    if (back == true) {
      setFormState(--formState);
    } else {
      if (formState === FORM_OPTIONS.length) {
        setShowModal(true);
      } else {
        setFormState(++formState);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div>
        {[0, 1].includes(formState) && (
          <div className="mx-3">
            {formState === 0 && (
              <div className="text-center fs-4 fw-bold">
                Hi
                <FontAwesomeIcon
                  className="app-text mx-1"
                  icon={faHandsClapping}
                />
                , select your dream country to study abroad
              </div>
            )}

            {formState === 1 && (
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
                widgetData={formState === 0 ? COUNTRIES : COURSES}
                handleCLick={handleCLick}
              />
            </div>
          </div>
        )}

        {[2, 3, 4, 5, 6].includes(formState) && (
          <div style={{ minHeight: "430px" }}>
            <p className="text-center mx-3 mt-4">
              {FORM_OPTIONS[formState].title}
            </p>
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
        )}

        {formState === 7 && (
          <div className="mx-3 pb-5">
            <p className="fs-3 fw-bolder text-center">
              Cheers! You're just one step away from getting started &#129321;
            </p>
            <form
              className="mt-5 d-flex flex-column gap-3"
              onSubmit={handleSubmit}
            >
              <Input autoFocus="true" label="Name" type="text" />
              <Input label="Email" type="email" />
              <Input label="Phone Number" type="number" />
            </form>
          </div>
        )}
      </div>

      <div className="d-flex gap-5 mt-5 align-items-center px-3">
        {formState > 0 && (
          <div
            className="d-flex gap-3 align-items-center cursor-pointer"
            onClick={() => handleCLick(true)}
          >
            <FontAwesomeIcon className="fs-3" icon={faArrowLeft} />
            <span className="fw-bold">Back</span>
          </div>
        )}

        <div className="flex-grow-1">
          <Button
            title={
              [2, 3, 5].includes(formState)
                ? "Next"
                : formState === FORM_OPTIONS.length
                ? "Start Journey"
                : "Continue"
            }
            handleCLick={() => handleCLick(false)}
            icon={faArrowRight}
          ></Button>
        </div>
      </div>
      <MyModal show={showModal} handleClose={handleClose} />
    </div>
  );
};
