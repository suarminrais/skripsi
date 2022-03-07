import BlogCard from "@/components/blog/blog.component";
import Footer from "@/components/footer/footer.component";
import Navbar from "@/components/navbar/navbar.component";
import Section from "@/components/section/section.components";
import { useAuth } from "@/hooks/auth";
import Head from "next/head";
import React from "react";

const Blog = () => {
  const { user, logout } = useAuth({ middleware: 'guest' });

  return (
    <>
      <Head>
        <title>Modal Tani - Blog</title>
      </Head>
      <Navbar user={user} logout={logout} />
      <Section title="Blog Modal Tani" subtitle="Bantu Petani, Pilih Program Pertanian. Modali dan Bagi Hasilnya." total="30">
        <BlogCard id={1} image="https://bucket.tanifund.com/uploads/projects/58d55ebd-9e45-4882-a85a-2b060209fc4d/280222030745-image.jpg" title="Budidaya" body="asdasdasdasdasd" />
        <BlogCard id={1} image="https://bucket.tanifund.com/uploads/projects/58d55ebd-9e45-4882-a85a-2b060209fc4d/280222030745-image.jpg" title="Budidaya" body="asdasdasdasdasd" />
        <BlogCard id={1} image="https://bucket.tanifund.com/uploads/projects/58d55ebd-9e45-4882-a85a-2b060209fc4d/280222030745-image.jpg" title="Budidaya" body="asdasdasdasdasd" />
      </Section>
      <Footer />
    </>
  );
};

export default Blog;
