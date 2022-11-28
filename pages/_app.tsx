import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/globals.css";
import type {AppProps} from "next/app";
import Head from "next/head";

import Layout from "@/components/layout"


export default function App({ Component, pageProps }: AppProps) {
    return (
    <Layout>
        <Head>
            <title>Kauppalista</title>
            <meta
                name="description"
                content="Kauppalistan hallintaohjelma"
            />
            <link rel="icon" href="/kauppalista.png" />
        </Head>
        <Component {...pageProps} />
    </Layout>
    );
}
