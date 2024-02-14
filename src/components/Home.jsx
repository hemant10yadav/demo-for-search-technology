import { Button } from "./shared/Button";
import ukLogo from "../assets/img/uk.png";
import { WhatToGetWidgetData } from "../constants";
import { WhatToGetWidget } from "./WhatToGetWidget";
import { EducationDetail } from "./EducationDetail";

export const Home = () => {
  return (
    <div className="bg-light">
      <div className="pb-5">
        <section className="mx-2 pt-4 mb-5">
          <h1 className="gradient-text">
            <span>Take the first step towards your Masters in Uk</span>
            <img className="ms-2" height="40" src={ukLogo} alt="ukLogo" />
          </h1>
          <h6 className="mt-2 fs-3 app-secondary-text fw-bold">
            Take the first step towards your study abroad journey
          </h6>
        </section>

        <section className="bg-whatToget text-white pt-4 pb-5 px-2 text-center">
          <label className="ts-13 fw-bold mb-5">Here is what you get:</label>
          <div className="row g-4 m-0 justify-content-center ">
            {WhatToGetWidgetData.map((obj) => (
              <div
                className="col-12 col-sm-10 col-md-6 col-xl-4"
                key={obj.title}
              >
                <WhatToGetWidget widgetData={obj}></WhatToGetWidget>
              </div>
            ))}
          </div>
          <div className=" row g-0 justify-content-center mt-5 pt-3">
            <div className="col-12 col-sm-7 col-md-6 col-lg-4">
              <Button
                title=" Get a free counselling session"
                icon={false}
              ></Button>
            </div>
          </div>
        </section>

        <section className="bg-light mt-5">
          <EducationDetail />
        </section>
      </div>
    </div>
  );
};
