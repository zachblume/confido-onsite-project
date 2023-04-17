const Input = ({ label, state = null, setState = () => {}, placeholder, ...props }) => {
    return (
        <div className="relative my-5">
            <label
                htmlFor="name"
                className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
            >
                {label}
            </label>
            <input
                type="text"
                name="name"
                id="name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-fuchsia-600 sm:text-sm sm:leading-6"
                placeholder={placeholder}
                value={state}
                onChange={(e) => setState(e.target.value)}
                {...props}
            />
        </div>
    );
};
export default Input;
