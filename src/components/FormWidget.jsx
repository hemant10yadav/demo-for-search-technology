import "./FormWidget.css";

export const FormWidget = ({ widgetData, selected }) => {
  let btnClass = "btn d-block border border-2 border-primary opacity-50";
  btnClass = selected ? btnClass + " active opacity-100" : btnClass;
  return (
    <div className="btn-box">
      <button className={btnClass} type="button">
        {widgetData.name}
      </button>
    </div>
  );
};
