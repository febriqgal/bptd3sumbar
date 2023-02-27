import Head from "next/head";
import AuthStateChangeProvider from "../context/auth";
import { UserProvider } from "../context/user";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>BPTD III Sumbar</title>
        <meta name="description" content="BPTD III Sumbar" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <UserProvider>
        <AuthStateChangeProvider>
          <Component {...pageProps} />
        </AuthStateChangeProvider>
      </UserProvider>
    </>
  );
}

export default MyApp;
