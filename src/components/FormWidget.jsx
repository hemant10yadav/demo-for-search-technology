import "./FormWidget.css";

export const FormWidget = ({ widgetData, selected, handleCLick }) => {
  let btnClass =
    "btn d-block btn-outline-primary opacity-25 bg-white text-primary";
  btnClass = selected ? btnClass + " active opacity-100 shadow" : btnClass;
  return (
    <div className="btn-box">
      <button onClick={handleCLick} className={btnClass} type="button">
        {widgetData?.flag && (
          <span className={`fi me-2 fi-${widgetData.flag}`}></span>
        )}
        {widgetData?.image && (
          <img height={30} src={widgetData?.image} className="me-2"></img>
        )}
        {widgetData.name}
      </button>
    </div>
  );
};
