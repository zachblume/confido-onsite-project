import "@/styles/globals.css";
import Layout from "@/components/Layout/Layout";
import { SWRConfig } from "swr";

const swrOptions = {
    fetcher: (url, init) => fetch(url, init).then((res) => res.json()),
    keepPreviousData: true,
    refreshInterval: 25,
};

const App = ({ Component, pageProps }) => {
    return (
        <SWRConfig value={swrOptions}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </SWRConfig>
    );
};
export default App;
