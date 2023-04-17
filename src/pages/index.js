import { useQuery, postgrest } from "@/lib/db";
import Table from "@/components/Table";
import PageTitle from "@/components/Layout/PageTitle";
import { toast } from "react-toastify";
import Main from "@/components/Layout/Main";
import AddProductForm from "@/components/AddProductForm";
import Modal from "@/components/Modal";
import { useState } from "react";

const Home = () => {
    const { data: products, error, mutate } = useQuery(postgrest.from("products").select("*"));
    const insert = async (obj) => (await postgrest.from("products").insert(obj)) && mutate();
    const markDone = async (id) =>
        (await postgrest.from("products").update({ done: true }).match({ id })) && mutate();
    const deleteTodo = async (id) =>
        (await postgrest.from("products").delete().match({ id })) && mutate();
    const insertFormHandler = (event) => {
        event.preventDefault();
        // console.log({
        //     upc: event.target?.upc?.value,
        //     description: event.target?.description?.value,
        //     price: event.target?.price?.value,
        //     date: event.target?.date?.value,
        // });
        insert({
            upc: event.target?.upc?.value,
            description: event.target?.description?.value,
            price: event.target?.price?.value,
            date: event.target?.date?.value,
        });
    };

    let title = "Products";
    let description = "A list of all the products and pricing information.";

    const [addProductModalOpen, setAddProductModalOpen] = useState(false);
    const openAddProductModal = () => {
        setAddProductModalOpen(true);
    };

    return (
        <div className="mx-auto max-w-7xl px-4 lg:px-8 main my-10">
            <PageTitle {...{ title, description, breadCrumbs: [{ url: "/", text: "Products" }] }}>
                {/* <button type="button" className="inline-flex items-center btn-secondary">
                    Edit
                </button> */}
                {/* Make add product give a modal of <AddProductForm /> */}

                <button type="button" className="ml-3 btn-secondary" onClick={openAddProductModal}>
                    Add Product
                </button>
                {
                    <Modal
                        primaryButton="Add Product"
                        cancelButton="Cancel"
                        open={addProductModalOpen}
                        setOpen={setAddProductModalOpen}
                    >
                        {" "}
                        <AddProductForm insertFormHandler={insertFormHandler} />
                    </Modal>
                }

                <button type="button" className="ml-3 btn-primary" onClick={() => {}}>
                    Upload Spreadsheet
                </button>
            </PageTitle>
            <Main>
                <Table rows={products} />
            </Main>
        </div>
    );
};
export default Home;
