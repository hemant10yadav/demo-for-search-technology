import "./WhatToGetWidget.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const WhatToGetWidget = ({ widgetData }) => {
  return (
    <section className="border border-2 rounded-3 d-flex flex-column h-100">
      <div
        className="rounded-top-3 bg-app text-white d-flex 
                      align-items-center px-3 gap-3 py-2"
      >
        <FontAwesomeIcon
          style={{ color: "#2f394b" }}
          className="fs-3"
          icon={widgetData.icon}
        />
        <span className="fw-bolder fs-6">{widgetData.title}</span>
      </div>
      <div className="p-3 fw-bold app-secondary-text bg-lightGray flex-grow-1">
        {widgetData.description}
      </div>
    </section>
  );
};
