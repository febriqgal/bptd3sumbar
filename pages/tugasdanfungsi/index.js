/* eslint-disable @next/next/no-img-element */
import React from "react";
import "animate.css";
import Layout from "../../components/Layout";
import styles from "../../styles/Home.module.css";

export default function Tugasdanfungsi() {
  return (
    <Layout pageTittle={"Tugas dan Fungsi - "}>
      <div className={styles.main}>
        <h1 className="text-center p-10 font-black text-4xl animate__animated animate__fadeInLeft">
          Tugas dan Fungsi
        </h1>
        <img
        className="w-full sm:w-[700px] rounded-lg"
          src="https://hubdat.dephub.go.id/media/original_images/WhatsApp_Image_2022-03-25_at_2.26.03_PM.jpeg"
          alt="logo"
        />
        <div className="px-10">
          <br />
          <h1 className="text-justify">
            Direktoral Jenderal Perhubungan Darat berada di bawah dan
            bertanggung jawab kepada Menteri Perhubungan. Direktorat Jenderal
            Perhubungan Darat dipimpin oleh Direktur Jenderal. Direktorat
            Jenderal Perhubungan Darat mempunyai tugas menyelenggarakan
            perumusan dan pelaksanaan kebijakan di bidang transportasi darat.
          </h1>
          <h1> <br /> <br />
            <span className="font-bold">Fungsi:</span>
            <br /> <br />
            Dalam melaksanakan tugas sebagaimana dimaksud dalam Peraturan
            Menteri Nomor 67 Tahun 2021 Pasal 110, Direktorat Jenderal
            Perhubungan Darat menyelenggarakan fungsi:
            <br /> <br />
            <span>
              1. Perumusan kebijakan di bidang penyelenggaraan lalu lintas,
              angkutan, sarana, prasarana, sistem lalu lintas dan angkutan
              jalan, sungai, danau, penyeberangan, dan angkutan multimoda, serta
              peningkatan keterpaduan sistem antar moda dan keselamatan
              transportasi darat;
            </span>
            <br />
            <br />
            <span>
              2. Pelaksanaan kebijakan di bidang penyelenggaraan lalu lintas,
              angkutan, sarana, prasarana, sistem lalu lintas dan angkutan
              jalan, sungai, danau, penyeberangan, dan angkutan multimoda, serta
              peningkatan keterpaduan sistem antar moda dan keselamatan
              transportasi darat;
            </span>
            <br />
            <br />
            <span>
              3. Penyusunan norma, standar, prosedur, dan kriteria di bidang
              penyelenggaraan lalu lintas, angkutan, sarana, prasarana, sistem
              lalu lintas dan angkutan jalan, sungai, danau, penyeberangan, dan
              angkutan multimoda, serta peningkatan keterpaduan sistem antar
              moda dan keselamatan transportasi darat;
            </span>
            <br /> <br />
            <span>
              4. Pelaksanaan pemberian bimbingan teknis dan supervisi di bidang
              penyelenggaraan lalu lintas, angkutan, sarana, prasarana, sistem
              lalu lintas dan angkutan jalan, sungai, danau, penyeberangan, dan
              angkutan multimoda, serta peningkatan keterpaduan sistem antar
              moda dan keselamatan transportasi darat;
            </span>
            <br /> <br />
            <span>
              5. Pelaksanaan evaluasi dan pelaporan di bidang penyelenggaraan
              lalu lintas, angkutan, sarana, prasarana, sistem lalu lintas dan
              angkutan jalan, sungai, danau, penyeberangan, dan angkutan
              multimoda, serta peningkatan keterpaduan sistem antar moda dan
              keselamatan transportasi darat;
            </span>
            <br /> <br />
            <span>
              6. Pelaksanaan administrasi Direktorat Jenderal Perhubungan Darat;
            </span>
            <br />
            <br />
            <span>7. Pelaksanaan fungsi lain yang diberikan oleh Menteri.</span>
          </h1>
        </div>
      </div>
    </Layout>
  );
}
