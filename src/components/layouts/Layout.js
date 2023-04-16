import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const GlobalLayout = ({ children }) => {
    return (
        <>
            <main className={inter.className}>{children}</main>
        </>
    );
};
