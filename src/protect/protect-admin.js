/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/display-name */
import Head from "next/head";
import Link from "next/link";
import { useUser } from "../context/user";

const protectAdmin = (Pages) => {
  return (props) => {
    const { uid, email } = useUser();
    if (!uid || email != "benisman1990@gmail.com") {
      return (
        <section>
          <Head>
            <title>404</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/logo.png" />
          </Head>
          <div className="h-screen pt-16 pb-12 flex flex-col bg-slate-900">
            <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex-shrink-0 flex justify-center">
                <Link href={"/"}>
                  <img
                    title="Beranda"
                    className="h-12 w-auto"
                    src="https://hubdat.dephub.go.id/static/images/logo_white.bae26e1b95c2.png"
                    alt=""
                  />
                </Link>
              </div>
              <div className="text-center">
                <h1 className="mt-2 text-4xl font-extrabold text-slate-50 tracking-tight sm:text-5xl">
                  Ups!
                </h1>
                <p className="mt-2 text-base text-gray-500">
                  Maaf, anda tidak memiliki akses.
                </p>
                <div className="mt-6">
                  <Link
                    href={"/"}
                    className="text-base font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Beranda<span aria-hidden="true"></span>
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </section>
      );
    }

    return <Pages {...props} />;
  };
};

export default protectAdmin;
