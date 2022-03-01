import Heading from "@/components/heading/heading.component";
import Hero from "@/components/hero/hero.component";
import Navbar from "@/components/navbar/navbar.component";
import Workflow from "@/components/workflow/workflow.component";
import Head from "next/head";
import React from "react";

const Home = () => {
  return (
    <>
      <Head>
        <title>Modal Tani</title>
      </Head>
      <Navbar/>
      <Hero/>
      <Heading bg="#F9F9F9" title="Alur Kerja Modal Tani" section="Alur">
        <Workflow src="https://dashboard.vestanesia.com/assets/Icon/Group_192.svg" title="Pilih Paket" subtitle="Pilih dan telusuri paket permodalan yang telah tersedia sesuai dengan dana yang anda miliki" />
        <Workflow src="https://dashboard.vestanesia.com/storage/upload/ceuVWWdMEpBJLb0PdljSjXT2KjOdizMrrzg3o0nf.svg" title="Pantau Permodalan" subtitle="Temukan update laporan permodalan anda yang di kelola oleh mitra petani Vestanesia melalui laporan dari tim ahli Vestanesia secara berkala" />
        <Workflow src="https://dashboard.vestanesia.com/storage/upload/cEacjxZopayU39JxlyLmCyb8aBTYND97oZh536q6.svg" title="Hasil Panen" subtitle="Semua hasil panen dari petani dijual ke mitra Vestanesia dengan harga yang menguntungkan" />
        <Workflow src="https://dashboard.vestanesia.com/storage/upload/C4WOAPkUesmJJzHnlzh7jH973HFWZ5p7dxzkXmNR.svg" title="Terima Bagi Hasil" subtitle="Imbal Hasil sesuai dengan kesepakatan pada setiap paket permodalan antara Pemodal dan Vestanesia"/>
      </Heading>
    </>
  );
}

export default Home;
