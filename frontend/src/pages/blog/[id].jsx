import Blog from "@/components/blog/blog.component";
import { BlogDetailImage } from "@/components/blog/blog.styles";
import { BlogDetailDivider } from "@/components/blog/blog.styles";
import { BlogDetailContent } from "@/components/blog/blog.styles";
import { BlogDetailHeader } from "@/components/blog/blog.styles";
import { BlogDetailFooter } from "@/components/blog/blog.styles";
import { BlogDetailHeading } from "@/components/blog/blog.styles";
import { BlogDetailContainer } from "@/components/blog/blog.styles";
import Footer from "@/components/footer/footer.component";
import Navbar from "@/components/navbar/navbar.component";
import { Container } from "@/components/navbar/navbar.styles";
import { useAuth } from "@/hooks/auth";
import Head from "next/head";
import React from "react";

const BlogDetail = () => {
  const { user, logout } = useAuth({ middleware: 'guest' });

  return (
    <>
      <Head>
        <title>Modal Tani - Blog Detail</title>
      </Head>
      <Navbar user={user} logout={logout} />
      <BlogDetailContainer>
        <Container>
          <BlogDetailImage src="https://bucket.tanifund.com/uploads/projects/58d55ebd-9e45-4882-a85a-2b060209fc4d/280222030745-image.jpg" />
          <BlogDetailHeader>Investasi di Bidang Pertanian? Siapa Takut!</BlogDetailHeader>
          <BlogDetailContent
            dangerouslySetInnerHTML={{
              __html:
                "<p>Selama masa pandemi, perhatian terhadap ketahanan pangan menjadi isu sentral di berbagai belahan dunia. Pertumbuhan sektor pertanian selama pandemi pun tidak bisa dianggap remeh, selalu positif meski sektor lain mengalami kontraksi. Sepanjang 2020 sektor pertanian berhasil tumbuh 2,1 persen, dan tren positif ini berlangsung setidaknya hingga kuartal ke-II 2021 dengan tumbuh 0,38 persen. Dari serapan tenaga kerja, penurunan di sektor manufaktur dan sektor usaha lain sebagian beralih profesi menjadi petani di pedesaan. Serapan tenaga kerja di sektor pertanian justru berhasil terjaga di 29,5 persen per Februari 2021, bahkan meningkat 0,36 persen dari tahun sebelumnya.</p><p>Prospek investasi di sektor pertanian dalam bentuk PMA tercatat US$208 juta di kuartal ke-II 2021, tumbuh 10,6 persen <em>year-on-year</em>. Fenomena resiliensi&nbsp;sektor pertanian dalam menghadapi gempuran badai krisis pandemi juga tercermin dari rally di harga komoditas pertanian global. Sebagai contoh harga kopi di pasar internasional telah naik 53,2 persen sejak awal tahun 2021, disusul oleh komoditas jagung tumbuh 11,5 persen dan teh 8,3 persen. Meskipun beberapa negara tujuan ekspor melakukan pengetatan akibat lonjakan varian Delta Covid-19, ternyata tak menyurutkan permintaan di sektor pertanian. Kenapa? Karena pangan adalah kebutuhan pokok.</p>",
            }}
          />
          <BlogDetailDivider />
          <BlogDetailHeading>Blog Terkait</BlogDetailHeading>
          <BlogDetailFooter>
            <Blog id={1} image="https://bucket.tanifund.com/uploads/projects/58d55ebd-9e45-4882-a85a-2b060209fc4d/280222030745-image.jpg" title="Budidaya" body="asdasdasdasdasd" />
            <Blog id={1} image="https://bucket.tanifund.com/uploads/projects/58d55ebd-9e45-4882-a85a-2b060209fc4d/280222030745-image.jpg" title="Budidaya" body="asdasdasdasdasd" />
            <Blog id={1} image="https://bucket.tanifund.com/uploads/projects/58d55ebd-9e45-4882-a85a-2b060209fc4d/280222030745-image.jpg" title="Budidaya" body="asdasdasdasdasd" />
          </BlogDetailFooter>
        </Container>
      </BlogDetailContainer>
      <Footer />
    </>
  );
};

export default BlogDetail;
