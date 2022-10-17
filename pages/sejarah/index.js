/* eslint-disable @next/next/no-img-element */
import "animate.css";
import React from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/Home.module.css";
export default function Sejarah() {
  return (
    <Layout pageTittle={"Sejarah - "}>
      <div className={styles.main}>
        <h1 className="text-center p-10 font-black text-4xl animate__animated animate__fadeInLeft">
          Sejarah
        </h1>
        <img
          src={
            "https://hubdat.dephub.go.id/media/original_images/berita_bkip_41.jpeg"
          }
          alt="sejarah"
        />
        <div className="px-10">
          <br />
          <br />
          <h1 className="font-semibold text-lg">
            Sejarah Direktorat Jenderal Perhubungan Darat
          </h1>
          <br />
          <p className="text-justify">
            Dalam Peraturan Menteri Perhubungan Republik Indonesia Nomor PM 67
            Tahun 2021 Tentang Organisasi dan Tata Kerja Kementerian
            Perhubungan. Direktorat Jenderal Perhubungan Darat mempunyai tugas
            menyelenggarakan perumusan dan pelaksanaan kebijakan dibidang
            transportasi darat.
          </p>
          <br />
          <p className="text-justify">
            Bentuk awal Kementerian Perhubungan yang saat itu bernama Departemen
            Perhubungan yang lahir dalam kancah perjuangan adalah gabungan
            antara Departemen Perhubungan dan Departemen Pekerjaan Umum, yang
            dipimpin oleh seorang Menteri Abikusno Tjokrosuyoso. Namun hal ini
            tidak berlangsung lama, karena Departemen Perhubungan dan Departemen
            Pekerjaan Umum tidak lagi dijabat oleh orang yang sama yang
            merangkap tugas seperti sebelumnya. Urusan perhubungan dan pekerjaan
            umum kemudian berada di bawah dua pejabat yang berbeda yaitu
            Kementerian Perhubungan dipimpin oleh Ir. Abdulkarim dan Kementerian
            Pekerjaan Umum di bawah pimpinan Ir. Putuhena. Sesuai dengan nama
            yang disandangnya, Departemen Perhubungan mengurusi masalah
            perhubungan.
          </p>
          <br />
          <p className="text-justify">
            Keinginan Belanda untuk berkuasa kembali di Indonesia sangat jelas
            terlihat ketika mereka melancarkan agresi militernya yang kedua pada
            tanggal 19 Desember 1948. Dalam agresinya tersebut, Belanda berhasil
            menguasai Yogyakarta dan menangkap Presiden Soekarno dan Wakil
            Presiden Hatta. Dalam kondisi darurat ini, Dinas Telegrap sebagi
            salah satu Jawatan dalam Departemen Perhubungan berhasil menjalankan
            tugasnya yang sangat berdampak penting bagi kelangsungan tegaknya
            Indonesia saat itu. Dinas Telegrap berhasil mengirim berita terakhir
            ke Bukittinggi yang ditujukan kepada Mr. Sjafruddin Prawiranegara
            dari Presiden Soekarno yang isinya memberi wewenang untuk membentuk
            suatu pemerintahan darurat. Selanjutnya dibentuklah Kabinet Darurat
            dengan Mr. Sjafruddin Prawiranegara sebagai Perdana Menteri dan Ir.
            Indratjaja sebagai Menteri Perhubungan dan merangkap sebagai Menteri
            Kemakmuran.
          </p>
          <br />
          <p className="text-justify">
            Sejak awal kemerdekaan hingga pengakuan kedaulatan Belanda atas RIS
            tahun 1949, Departemen Perhubungan memiliki wewenang untuk mengatur
            perhubungan laut, udara, darat, perkeretaapian serta pos, telegraf,
            dan telekomunikasi dan masing-masing sektor tersebut diurus oleh
            jawatan-jawatannya sendiri yang berada di bawah struktur organisasi
            Departemen Perhubungan.
          </p>
        </div>
      </div>
    </Layout>
  );
}
