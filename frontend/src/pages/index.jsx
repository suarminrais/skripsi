import Blog from "@/components/blog/blog.component";
import Footer from "@/components/footer/footer.component";
import Heading from "@/components/heading/heading.component";
import Hero from "@/components/hero/hero.component";
import Navbar from "@/components/navbar/navbar.component";
import Program from "@/components/program/program.component";
import Workflow from "@/components/workflow/workflow.component";
import { useAuth } from "@/hooks/auth";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import _ from 'lodash';

const Home = () => {
  const { user, logout, program, blog } = useAuth({ middleware: 'guest' });
  const [programs, setPrograms] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setPrograms(_.slice(program?.data, 0, 3))
    setBlogs(_.slice(blog?.data, 0, 3))
  }, [program, blog]);

  return (
    <>
      <Head>
        <title>Modal Tani</title>
      </Head>
      <Navbar user={user} logout={logout} />
      <Hero />
      <Heading bg="#F9F9F9" title="Program Modal Tani" section="Program" between>
        {
          programs?.length > 0 && programs.map(data => <Program
            key={data.id}
            id={data.id}
            image={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/images/${data.image.name}`}
            title={data.name}
            periode={`${data.periode} Bulan`}
            interest={`${data.interest}%`}
            funded={data.funded?.toLocaleString("id-ID")}
            funding={data.funding?.toLocaleString("id-ID")}
            type={data.type}
            location={data.location}
          />)
        }
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
          subtitle="Temukan update laporan permodalan anda yang anda modali"
        />
        <Workflow
          src="https://dashboard.vestanesia.com/storage/upload/cEacjxZopayU39JxlyLmCyb8aBTYND97oZh536q6.svg"
          title="Hasil Panen"
          subtitle="Semua hasil panen dari petani dijual dengan harga yang menguntungkan"
        />
        <Workflow
          src="https://dashboard.vestanesia.com/storage/upload/C4WOAPkUesmJJzHnlzh7jH973HFWZ5p7dxzkXmNR.svg"
          title="Terima Bagi Hasil"
          subtitle="Imbal Hasil sesuai dengan kesepakatan pada setiap paket permodalan antara Pemodal dan Petani"
        />
      </Heading>
      <Heading bg="#F9F9F9" title="Berita Terkait Pertanian" section="Blog" between>
        {
          blogs?.length > 0 && blogs.map(data => <Blog
            key={data.id}
            id={data.id}
            image={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/images/${data.image.name}`}
            title={data.name}
            body={data.description}
          />)
        }
      </Heading>
      <Footer />
    </>
  );
};

export default Home;
