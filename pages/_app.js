import Head from "next/head";
import AuthStateChangeProvider from "../context/auth";
import { UserProvider } from "../context/user";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>BPTD III SUMBAR</title>
        <meta name="description" content="BPTD III SUMBAR" />
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
