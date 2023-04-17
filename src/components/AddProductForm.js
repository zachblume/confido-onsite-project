import Input from "./Input";
const AddProductForm = ({ insertFormHandler, submitEvent, setOpen }) => {
    return (
        <div>
            <h3 className="text-2xl font-normal">Add a new product</h3>
            <form onSubmit={insertFormHandler} className="mt-8">
                <Input type="text" name="upc" placeholder="upc" label="UPC" />
                <Input
                    type="text"
                    name="description"
                    placeholder="description"
                    label="Description"
                />
                <Input type="text" name="price" placeholder="price" label="Price" />
                {/* generate a date now() like 01/01/2023 */}
                <Input
                    type="text"
                    name="date"
                    placeholder={new Date().toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                    })}
                    label="Date"
                />
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                    <button
                        type="submit"
                        className="inline-flex w-full justify-center rounded-md bg-fuchsia-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-fuchsia-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-600 sm:col-start-2"
                    >
                        Add
                    </button>
                    <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                        onClick={() => setOpen(false)}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};
export default AddProductForm;
