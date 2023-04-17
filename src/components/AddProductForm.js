import Input from "./Input";
const AddProductForm = ({ insertFormHandler, submitEvent }) => {
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
                <button type="submit" className="inline-flex items-center btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};
export default AddProductForm;
