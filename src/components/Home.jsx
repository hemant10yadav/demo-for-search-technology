import { Button } from "./Button";
import ukLogo from "../assets/img/uk.png";
import { WhatToGetWidgetData } from "../constants";
import { WhatToGetWidget } from "./WhatToGetWidget";
import { EducationDetail } from "./EducationDetail";

export const Home = () => {
  return (
    <div className="pb-5 bg-light">
      <div className="pb-5">
        <section className="mx-2 mt-3 mb-4">
          <h1 className="app-t fw-bolder ts-2">
            <span>Take the first step towards your Masters in Uk</span>
            <img className="ms-2" height="40" src={ukLogo} alt="ukLogo" />
          </h1>
          <h6 className="mt-2 app-secondary-text fw-bold">
            Take the first step towards your study abroad journey
          </h6>
        </section>

        <section className="bg-whatToget text-white pt-4 pb-5 px-2">
          <label className="ts-13 fw-500">Here is what you get:</label>
          {WhatToGetWidgetData.map((obj) => (
            <div className="my-4" key={obj.title}>
              <WhatToGetWidget widgetData={obj}></WhatToGetWidget>
            </div>
          ))}
          <Button title="Get a free counselling session" icon={false}></Button>
        </section>

        <section className="bg-light">
          <EducationDetail />
        </section>
      </div>
    </div>
  );
};
