/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import profile from "../../public/person.png";
export default function Organisasi() {
  const people = [
    {
      nama: "ARDONO, ATD, MT.",
      jabatan: "KEPALA BPTD TIPE B WIL. V PROV. SUMATERA BARAT",
      email: "#",
      hp: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1574100004472-e536d3b6bacc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      nama: "HERRY WANDA, Amd.LLAJ.,MAP",
      jabatan: "KEPALA SUB BAGIAN TATA USAHA",
      email: "#",
      hp: "#",
      imageUrl: "#",
    },
    {
      nama: "IKRA SURANTHA, ST., MT",
      jabatan: "KASI SARPRAS TRANSPORTASI JALAN",
      email: "#",
      hp: "#",
      imageUrl: "#",
    },
    {
      nama: "YUGO KRISTANTO, S.SiT",
      jabatan: "KASI LLAJ",
      email: "#",
      hp: "#",
      imageUrl: "#",
    },
    {
      nama: "ELBRIYAN SIRAIT, ST",
      jabatan: "KASI TRANSPORTASI SDP PERINTIS",
      email: "#",
      hp: "#",
      imageUrl: "#",
    },
    {
      nama: "SYAFRIZON, S.Sos",
      jabatan: "TERMINAL PENUMPANG TIPE A KELAS II SIMPANG AUR BUKIT TINGGI",
      email: "#",
      hp: "#",
      imageUrl: "#",
    },
    {
      nama: "HARI LEO AGUSTA, SE",
      jabatan: "TERMINAL PENUMPANG TIPE A KELAS III JATI PARIAMAN",
      email: "#",
      hp: "#",
      imageUrl: "#",
    },
    {
      nama: "PASDIAN, SH., MM",
      jabatan: "TERMINAL PENUMPANG TIPE A KELAS III SOLOK",
      email: "#",
      hp: "#",
      imageUrl: "#",
    },
    {
      nama: "WASIMAN",
      jabatan: "TERMINAL PENUMPANG TIPE A KELAS III KILIRAN JAO",
      email: "#",
      hp: "#",
      imageUrl: "#",
    },
    {
      nama: "HENDRI, SH",
      jabatan: "TERMINAL PENUMPANG TIPE A KELAS III ANAK AIR",
      email: "#",
      hp: "#",
      imageUrl: "#",
    },
    {
      nama: "FIRDAUS, S.Sos",
      jabatan: "UPPKB KELAS II LUBUK SELASIH",
      email: "#",
      hp: "#",
      imageUrl: "#",
    },
    {
      nama: "NURSYAFRIL BASAR, SH",
      jabatan: "UPPKB KELAS II SUNGAI LANGSAT",
      email: "#",
      hp: "#",
      imageUrl: "#",
    },
    {
      nama: "ALIZAR, SH",
      jabatan: "UPPKB KELAS II TANJUNG BALIK",
      email: "#",
      hp: "#",
      imageUrl: "#",
    },
    {
      nama: "HERWAN SOFDI, S.AP",
      jabatan: "UPPKB KELAS II AIR HAJI",
      email: "#",
      hp: "#",
      imageUrl: "#",
    },
    {
      nama: "B. TAUFIK K, SH",
      jabatan: "UPPKB KELAS II BERINGIN",
      email: "#",
      hp: "#",
      imageUrl: "#",
    },
    {
      nama: "AGUS SUMARSO, SE",
      jabatan: "PELABUHAN ANGKUTAN PENYEBERANGAN TELUK BUNGUS",
      email: "#",
      hp: "#",
      imageUrl: "#",
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Organisasi - BPTD III Sumbar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 py-5"
      >
        {people.map((person, i) => (
          <li
            key={person.nama}
            className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow-xl divide-y divide-gray-200"
          >
            <div className="flex-1 flex flex-col p-8  ">
              <Image
                src={profile}
                alt={"#"}
                className="object-cover w-32 h-32 flex-shrink-0   mx-auto rounded-full"
              />
              <h3 className="mt-6 text-gray-900 text-sm font-bold">
                {person.nama}
              </h3>
              <dl className="mt-1 flex-grow flex flex-col justify-between">
                <dt className="sr-only">Title</dt>
                <dt className="sr-only">Role</dt>
                <dd className="mt-3">
                  <span className="px-2 py-1 text-slate-500 text-xs font-semibold">
                    {person.jabatan}
                  </span>
                </dd>
              </dl>
            </div>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
