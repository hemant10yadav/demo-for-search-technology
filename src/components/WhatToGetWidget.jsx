import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const WhatToGetWidget = ({ widgetData }) => {
  return (
    <section className="border border-2 rounded-3 whatToGetWidget">
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
      <div className="p-3 fw-bold app-secondary-text bg-lightGray">
        {widgetData.description}
      </div>
    </section>
  );
};
