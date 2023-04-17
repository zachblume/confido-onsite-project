import Input from "./Input";
import { BarsArrowUpIcon } from "@heroicons/react/24/outline";

const UploadProductForm = ({ formHandler = () => {} }) => (
    <div>
        <h3 className="text-2xl font-normal">Upload a spreadsheet of products</h3>
        <form onSubmit={formHandler} className="mt-8">
            <input type="file" name="file" className="hidden" />
            <button
                type="button"
                className="block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2 m-4 mt-8 sm:m-0 sm:mt-8 w-auto sm:w-full"
            >
                <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                >
                    {/* Add icon from heroicons */}
                    <BarsArrowUpIcon />
                </svg>
                <span className="mt-2 block text-sm font-semibold text-gray-900">
                    Upload a spreadsheet of products
                </span>
            </button>
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
export default UploadProductForm;
