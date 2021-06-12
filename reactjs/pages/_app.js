import Layout from "../components/navbar/layout";
import "../styles/Global.css";

import "react-big-calendar/lib/css/react-big-calendar.css";
import { getSession, Provider } from "next-auth/client";
import Head from "next/head";
import Background from "../components/background-animace/background";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Educko</title>
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
export default MyApp;
