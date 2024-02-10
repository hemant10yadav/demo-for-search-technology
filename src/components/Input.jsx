import "./Input.css";

export const Input = ({ type, label, ...props }) => {
  return (
    <div className="form__group field w-100">
      <input
        type={type}
        className="form__field"
        placeholder={label}
        name={label}
        id={label}
        required
        {...props}
      />
      <label htmlFor={label} className="form__label">
        {label}
      </label>
    </div>
  );
};
