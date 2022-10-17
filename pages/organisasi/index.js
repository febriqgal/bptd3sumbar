/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */

import "animate.css";
import React from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/Home.module.css";

export default function Organisasi() {
  const imageq = [
    {
      nama: "-",
      url: "https://images.unsplash.com/photo-1665319545079-31f2c242bcf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
      jabatan: "-",
    },
    {
      nama: "Drs. Hendro Sugiatno, M.M",
      url: "https://hubdat.dephub.go.id/media/original_images/Dirjen_Hendro.png",
      jabatan: "Direktur Jenderal Perhubungan Darat",
    },
    {
      nama: "Amirulloh, S.SiT., M.M.Tr",
      url: "https://hubdat.dephub.go.id/media/original_images/Sesdit_Darat_Baru.png",
      jabatan: "Sekretaris Direktorat Jenderal Perhubungan Darat",
    },
    {
      nama: "Suharto, ATD., M.M.",
      url: "https://hubdat.dephub.go.id/media/original_images/Dir_Angkutan-Suharto.png",
      jabatan: "Direktur Angkutan Jalan",
    },
    {
      nama: "Ir. Junaidi, M.M.",
      url: "https://hubdat.dephub.go.id/media/original_images/Dir_TSDP-Junaidi.png",
      jabatan: "Direktur Transportasi Sungai, Danau dan Penyeberangan",
    },
    {
      nama: "Ir. Danto Restyawan, MT",
      url: "https://hubdat.dephub.go.id/media/original_images/Pak_Danto_01-removebg-preview.png",
      jabatan: "Direktur Sarana Transportasi Jalan",
    },
    {
      nama: "Ir. M. Popik Montanasyah, M.T.",
      url: "https://hubdat.dephub.go.id/media/original_images/Dir_Prasarana-Popik.png",
      jabatan: "Direktur Prasarana Transportasi Jalan",
    },
    {
      nama: "Ir. Cucu Mulyana, DESS.",
      url: "https://hubdat.dephub.go.id/media/original_images/Dir_Lalin-Cucu_Mulyana.png",
      jabatan: "Direktur Lalu Lintas Jalan",
    },
  ];
  return (
    <Layout pageTittle={"Organisasi - "}>
      <div className={styles.main}>
        <h1 className="my-10 font-black text-4xl animate__animated animate__backInDown">
          Profile Organisasi
        </h1>
        <div className="animate__animated animate__backInLeft grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6">
          {/* gambar 1 */}
          <div className="px-4">
            <div className="flex flex-col items-center">
              <div className="h-[150px] aspect-square rounded-full overflow-clip">
                <img
                  className="hover:scale-[1.40] scale-125 -translate-y-2 duration-1000 object-bottom overflow-clip"
                  src={imageq[0].url}
                  alt="gambar 1"
                ></img>
              </div>
              <h1 className="text-center mt-3 font-thin text-gray-400">
                {imageq[0].jabatan}
              </h1>
              <h1 className="text-center font-bold">{imageq[0].nama}</h1>
            </div>
          </div>
          {/* gambar 2 */}
          <div className="px-4">
            <div className="flex flex-col items-center">
              <div className="h-[150px] aspect-square rounded-full overflow-clip">
                <img
                  className="scale-[1.26] hover:scale-[1.40] translate-y-4 duration-1000 object-bottom overflow-clip"
                  src={imageq[1].url}
                  alt="gambar 2"
                ></img>
              </div>
              <h1 className="text-center mt-3 font-thin text-gray-400">
                {imageq[1].jabatan}
              </h1>
              <h1 className="text-center font-bold">{imageq[1].nama}</h1>
            </div>
          </div>
          {/* gambar 3 */}
          <div className="px-4">
            <div className="flex flex-col items-center">
              <div className="h-[150px] aspect-square rounded-full overflow-clip">
                <img
                  className="hover:scale-150 scale-125 duration-1000 object-bottom overflow-clip -translate-y-16"
                  src={imageq[2].url}
                  alt="gambar 3"
                ></img>
              </div>
              <h1 className="text-center mt-3 font-thin text-gray-400">
                {imageq[2].jabatan}
              </h1>
              <h1 className="text-center font-bold">{imageq[2].nama}</h1>
            </div>
          </div>
          {/* gambar 4 */}
          <div className="px-4">
            <div className="flex flex-col items-center">
              <div className="h-[150px] aspect-square rounded-full overflow-clip">
                <img
                  className="hover:scale-125 scale-110 -translate-y-5  duration-1000 object-bottom overflow-clip"
                  src={imageq[3].url}
                  alt="gambar 4"
                ></img>
              </div>
              <h1 className="text-center mt-3 font-thin text-gray-400">
                {imageq[3].jabatan}
              </h1>
              <h1 className="text-center font-bold">{imageq[3].nama}</h1>
            </div>
          </div>
          {/* gambar 5 */}
          <div className="px-4">
            <div className="flex flex-col items-center">
              <div className="h-[150px] aspect-square rounded-full overflow-clip">
                <img
                  className="hover:scale-110 duration-1000 object-bottom overflow-clip"
                  src={imageq[4].url}
                  alt="gambar 5"
                ></img>
              </div>
              <h1 className="text-center mt-3 font-thin text-gray-400">
                {imageq[4].jabatan}
              </h1>
              <h1 className="text-center font-bold">{imageq[4].nama}</h1>
            </div>
          </div>
          {/* gambar 6 */}
          <div className="px-4">
            <div className="flex flex-col items-center">
              <div className="h-[150px] aspect-square rounded-full overflow-clip">
                <img
                  className="hover:scale-110 duration-1000 object-bottom overflow-clip"
                  src={imageq[5].url}
                  alt="gambar 6"
                ></img>
              </div>
              <h1 className="text-center mt-3 font-thin text-gray-400">
                {imageq[5].jabatan}
              </h1>
              <h1 className="text-center font-bold">{imageq[5].nama}</h1>
            </div>
          </div>
          {/* gambar 7 */}
          <div className="px-4">
            <div className="flex flex-col items-center">
              <div className="h-[150px] aspect-square rounded-full overflow-clip">
                <img
                  className="hover:scale-110 -translate-y-5 duration-1000 object-bottom overflow-clip"
                  src={imageq[6].url}
                  alt="gambar 7"
                ></img>
              </div>
              <h1 className="text-center mt-3 font-thin text-gray-400">
                {imageq[6].jabatan}
              </h1>
              <h1 className="text-center font-bold">{imageq[6].nama}</h1>
            </div>
          </div>
          {/* gambar 7 */}
          <div className="px-4">
            <div className="flex flex-col items-center">
              <div className="h-[150px] aspect-square rounded-full overflow-clip">
                <img
                  className="hover:scale-110 -translate-y-5 duration-1000 object-bottom overflow-clip"
                  src={imageq[7].url}
                  alt="gambar 8"
                ></img>
              </div>
              <h1 className="text-center mt-3 font-thin text-gray-400">
                {imageq[7].jabatan}
              </h1>
              <h1 className="text-center font-bold">{imageq[7].nama}</h1>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center p-10 font-black text-4xl animate__animated animate__fadeInLeft">
        STRUKTUR ORGANISASI
      </h1>
      <div className="px-16 py-10">
        <h1>Direktorat Jenderal Perhubungan Darat terdiri atas:</h1>
        <br />
        <p className="pb-10">
          1. Sekretariat Direktorat Jenderal;
          <br />
          2. Direktorat Lalu Lintas Jalan;
          <br />
          3. Direktorat Angkutan Jalan;
          <br />
          4. Direktorat Prasarana Transportasi Jalan;
          <br />
          5. Direktorat Sarana Transportasi Jalan;
          <br />
          6. dan Direktorat Transportasi Sungai, Danau dan Penyeberangan.
        </p>
        <hr />
        <h1 className="text-center p-10 font-black text-4xl animate__animated animate__fadeInLeft">
          Bagan Susunan Organisasi Direktorat Jenderal Perhubungan Darat
        </h1>
        <img
          src="https://hubdat.dephub.go.id/media/original_images/Content3x.png"
          alt="ddd"
        ></img>
      </div>
    </Layout>
  );
}
