import { useEffect, useRef } from "react";
import { FormWidget } from "./FormWidget";
import "./VerticalScrollableTabsByHemant.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

export const VerticalScrollableTabsByHemant = ({
  widgetData,
  selectedWidgetIndex,
  setSelectedWidgetIndex,
  handleCLick,
}) => {
  const scrollDivRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollDiv = scrollDivRef.current;
      const widgetHeight = scrollDiv.scrollHeight / (widgetData.length + 3);
      const centerIndex = Math.round(scrollDiv.scrollTop / widgetHeight);

      setSelectedWidgetIndex(centerIndex);
    };

    const scrollDiv = scrollDivRef.current;
    scrollDiv.addEventListener("scroll", handleScroll);

    return () => {
      scrollDiv.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div
        ref={scrollDivRef}
        className="scrollDiv d-flex align-items-center flex-column gap-4 py-3"
      >
        {widgetData.map((data, index) => (
          <FormWidget
            key={data.name}
            widgetData={data}
            selected={index === selectedWidgetIndex}
            handleCLick={handleCLick}
          />
        ))}
      </div>
      <div className="text-center my-4 opacity-75">
        <FontAwesomeIcon className="seemless text-primary" icon={faAngleUp} />
        <p>
          <small>Scroll for a seamless experience</small>
        </p>
      </div>
    </div>
  );
};
