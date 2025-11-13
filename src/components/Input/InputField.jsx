const InputField = ({ label, type, placeholder, name }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block mb-1 text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default InputField;
