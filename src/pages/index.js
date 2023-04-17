import { useQuery, postgrest } from "@/lib/db";
import Table from "@/components/Table";
import PageTitle from "@/components/Layout/PageTitle";
import { toast } from "react-toastify";
import Main from "@/components/Layout/Main";
import AddProductForm from "@/components/AddProductForm";
import Modal from "@/components/Modal";
import { useState } from "react";
import UploadProductForm from "@/components/UploadProductForm";

const Home = () => {
    const { data: products, error, mutate } = useQuery(postgrest.from("products").select("*"));
    const insert = async (obj) => (await postgrest.from("products").insert(obj)) && mutate();
    const markDone = async (id) =>
        (await postgrest.from("products").update({ done: true }).match({ id })) && mutate();
    const deleteTodo = async (id) =>
        (await postgrest.from("products").delete().match({ id })) && mutate();

    // Add a product modal
    const [addProductModalOpen, setAddProductModalOpen] = useState(false);
    const openAddProductModal = () => setAddProductModalOpen(true);
    const insertFormHandler = (event) => {
        event.preventDefault();
        insert({
            upc: event.target?.upc?.value,
            description: event.target?.description?.value,
            price: event.target?.price?.value,
            date: event.target?.date?.value,
        });
        setAddProductModalOpen(false);
    };

    // Upload product modal
    const [uploadModalOpen, setUploadModalOpen] = useState(false);
    const openUploadModal = () => setUploadModalOpen(true);

    let title = "Products";
    let description = "A list of all the products and pricing information.";

    return (
        <div className="mx-auto max-w-7xl px-4 lg:px-8 main my-10">
            <PageTitle {...{ title, description, breadCrumbs: [{ url: "/", text: "Products" }] }}>
                <button type="button" className="ml-3 btn-secondary" onClick={openAddProductModal}>
                    Add Product
                </button>
                <Modal
                    primaryButton="Add Product"
                    cancelButton="Cancel"
                    open={addProductModalOpen}
                    setOpen={setAddProductModalOpen}
                >
                    <AddProductForm
                        insertFormHandler={insertFormHandler}
                        setOpen={setAddProductModalOpen}
                    />
                </Modal>

                <button type="button" className="ml-3 btn-primary" onClick={openUploadModal}>
                    Upload Spreadsheet
                </button>
                <Modal open={uploadModalOpen} setOpen={setUploadModalOpen}>
                    <UploadProductForm setOpen={setUploadModalOpen} />
                </Modal>
            </PageTitle>
            <Main>
                <Table rows={products} />
            </Main>
        </div>
    );
};
export default Home;
