import {
    ArrowPathRoundedSquareIcon,
    ArrowUpIcon,
    BarsArrowUpIcon,
} from "@heroicons/react/24/outline";

const EmptyState = ({ openUploadModal }) => (
    <button
        type="button"
        onClick={openUploadModal}
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
);
export default EmptyState;
