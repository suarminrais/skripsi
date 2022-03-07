import Blog from "@/components/blog/blog.component";
import Footer from "@/components/footer/footer.component";
import Heading from "@/components/heading/heading.component";
import Hero from "@/components/hero/hero.component";
import Navbar from "@/components/navbar/navbar.component";
import Program from "@/components/program/program.component";
import Workflow from "@/components/workflow/workflow.component";
import Head from "next/head";
import React from "react";

const Home = () => {
  return (
    <>
      <Head>
        <title>Modal Tani</title>
      </Head>
      <Navbar />
      <Hero />
      <Heading bg="#F9F9F9" title="Program Modal Tani" section="Program" between>
        <Program
          id={1}
          image="https://bucket.tanifund.com/uploads/projects/58d55ebd-9e45-4882-a85a-2b060209fc4d/280222030745-image.jpg"
          title="Budidaya"
          periode="4 Bulan"
          interest="5%"
          funded="Rp 34 juta"
          funding="Rp 1 juta"
          type="Budidaya"
          location="Bulukumba"
        />
        <Program
          id={2}
          image="https://bucket.tanifund.com/uploads/projects/58d55ebd-9e45-4882-a85a-2b060209fc4d/280222030745-image.jpg"
          title="Budidaya"
          periode="4 Bulan"
          interest="5%"
          funded="Rp 34 juta"
          funding="Rp 1 juta"
          type="Budidaya"
          location="Bulukumba"
        />
        <Program
          id={3}
          image="https://bucket.tanifund.com/uploads/projects/58d55ebd-9e45-4882-a85a-2b060209fc4d/280222030745-image.jpg"
          title="Budidaya"
          periode="4 Bulan"
          interest="5%"
          funded="Rp 34 juta"
          funding="Rp 1 juta"
          type="Budidaya"
          location="Bulukumba"
        />
      </Heading>
      <Heading bg="#F4F4F4" title="Alur Kerja Modal Tani" section="Alur">
        <Workflow
          src="https://dashboard.vestanesia.com/assets/Icon/Group_192.svg"
          title="Pilih Paket"
          subtitle="Pilih dan telusuri paket permodalan yang telah tersedia sesuai dengan dana yang anda miliki"
        />
        <Workflow
          src="https://dashboard.vestanesia.com/storage/upload/ceuVWWdMEpBJLb0PdljSjXT2KjOdizMrrzg3o0nf.svg"
          title="Pantau Permodalan"
          subtitle="Temukan update laporan permodalan anda yang di kelola oleh mitra petani Vestanesia melalui laporan dari tim ahli Vestanesia secara berkala"
        />
        <Workflow
          src="https://dashboard.vestanesia.com/storage/upload/cEacjxZopayU39JxlyLmCyb8aBTYND97oZh536q6.svg"
          title="Hasil Panen"
          subtitle="Semua hasil panen dari petani dijual ke mitra Vestanesia dengan harga yang menguntungkan"
        />
        <Workflow
          src="https://dashboard.vestanesia.com/storage/upload/C4WOAPkUesmJJzHnlzh7jH973HFWZ5p7dxzkXmNR.svg"
          title="Terima Bagi Hasil"
          subtitle="Imbal Hasil sesuai dengan kesepakatan pada setiap paket permodalan antara Pemodal dan Vestanesia"
        />
      </Heading>
      <Heading bg="#F9F9F9" title="Berita Terkait Pertanian" section="Blog" between>
        <Blog id={1} image="https://bucket.tanifund.com/uploads/projects/58d55ebd-9e45-4882-a85a-2b060209fc4d/280222030745-image.jpg" title="Budidaya" body="asdasdasdasdasd" />
        <Blog id={1} image="https://bucket.tanifund.com/uploads/projects/58d55ebd-9e45-4882-a85a-2b060209fc4d/280222030745-image.jpg" title="Budidaya" body="asdasdasdasdasd" />
        <Blog id={1} image="https://bucket.tanifund.com/uploads/projects/58d55ebd-9e45-4882-a85a-2b060209fc4d/280222030745-image.jpg" title="Budidaya" body="asdasdasdasdasd" />
      </Heading>
      <Footer />
    </>
  );
};

export default Home;
