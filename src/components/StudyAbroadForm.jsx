import { faCloudSun, faHandsClapping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VerticalScrollableTabsByHemant } from "./VerticalScrollableTabsByHemant";
import { COUNTRIES, COURSES, FORM_OPTIONS } from "../constants";
import { useState } from "react";
import { Input } from "./shared/Input";
import { MyModal } from "./OtpModal";
import { StudyAbroadOptions } from "./StudyAbroadOptions";
import { StudyAbroadFormFooter } from "./StudyAbroadFormFooter";

export const StudyAbroadForm = ({ formState, setFormState }) => {
  const [selectedWidgetIndex, setSelectedWidgetIndex] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const handleCLick = (back) => {
    if (back === true) {
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
              <VerticalScrollableTabsByHemant
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
            <StudyAbroadOptions
              formState={formState}
              handleCLick={handleCLick}
            />
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
      <StudyAbroadFormFooter formState={formState} handleCLick={handleCLick} />
      <MyModal show={showModal} handleClose={handleClose} />
    </div>
  );
};
