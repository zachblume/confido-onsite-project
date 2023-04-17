import { useQuery, postgrest } from "@/lib/db";
import Table from "@/components/Table";
import PageTitle from "@/components/Layout/PageTitle";
import { toast } from "react-toastify";
import Main from "@/components/Layout/Main";
import AddProductForm from "@/components/AddProductForm";
import Modal from "@/components/Modal";
import { useState } from "react";
import UploadProductForm from "@/components/UploadProductForm";

const Timeline = () => {
    const { data: products, error, mutate } = useQuery(postgrest.from("products").select("*"));

    let title = "Timeline";
    let description = "Hmmm";

    return (
        <div className="mx-auto max-w-7xl px-4 lg:px-8 main my-10">
            <PageTitle
                {...{ title, description, breadCrumbs: [{ url: "/", text: "Products" }] }}
            ></PageTitle>
            <Main>Main</Main>
        </div>
    );
};
export default Timeline;
