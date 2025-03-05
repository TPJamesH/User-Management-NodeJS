import { HeadlessInput } from "./HeadlessInput";
/*Rendering */
function InputGroup({
  label,
  name,
  value,
  type,
  disabled,
  placeholder,
  required,
  classNameInput,
  classNameLabel,
}) {
  return (

    <HeadlessInput
      name={name}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      value={value}
    >
      {/*Children function recieves the above props*/}
      {({ value, onChange, type, name, placeholder, disabled, required }) => (
        <div className="relative z-0 w-full">
          <input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            className={classNameInput ? classNameInput : `peer block py-2.5 px-1 w-full text-sm text-gray-600 bg-transparent border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-[#FF6464] placeholder-transparent focus:placeholder-gray-600 ${disabled ? "border-gray-300" : "border-gray-400"
              }`}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
          />
          <label
            htmlFor={name}
            className={classNameLabel ? classNameLabel : "peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"}
          >
            {label}
          </label>
        </div>
      )}
    </HeadlessInput>
  );
}



export { InputGroup };
