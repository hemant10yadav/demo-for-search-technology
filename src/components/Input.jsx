import "./Input.css";

export const Input = ({ label, type, ...childrens }) => {
  return (
    <div class="form__group field">
      <input
        type={type}
        class="form__field"
        placeholder={label}
        name={label}
        id={label}
        required
        childrens
      />
      <label for="name" class="form__label">
        {label}
      </label>
    </div>
  );
};
