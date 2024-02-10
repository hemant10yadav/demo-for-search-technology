import { useState, useEffect, useRef } from "react";
import { FormWidget } from "./FormWidget";
import "./HemantScrollableContent.css";
import { COUNTRIES } from "../constatnts";

export const HemantScrollableContent = () => {
  const [selectedWidgetIndex, setSelectedWidgetIndex] = useState(1);
  const scrollDivRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollDiv = scrollDivRef.current;
      const widgetHeight = scrollDiv.scrollHeight / (COUNTRIES.length + 3);
      const centerIndex = Math.round(scrollDiv.scrollTop / widgetHeight);

      setSelectedWidgetIndex(centerIndex);
      const newScrollTop =
        centerIndex * widgetHeight - scrollDiv.clientHeight / 2;
    };

    const scrollDiv = scrollDivRef.current;
    scrollDiv.addEventListener("scroll", handleScroll);

    return () => {
      scrollDiv.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      ref={scrollDivRef}
      className="scrollDiv d-flex align-items-center flex-column gap-4 py-3"
    >
      {COUNTRIES.map((country, index) => (
        <FormWidget
          key={country.name}
          widgetData={country}
          selected={index === selectedWidgetIndex}
        />
      ))}
    </div>
  );
};
