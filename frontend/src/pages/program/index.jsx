import Footer from "@/components/footer/footer.component";
import Navbar from "@/components/navbar/navbar.component";
import Section from "@/components/section/section.components";
import Head from "next/head";
import React from "react";
import ProgramCard from "@/components/program/program.component";
import { useAuth } from "@/hooks/auth";

const Program = () => {
  const { user, logout } = useAuth({ middleware: 'guest' });

  return (
    <>
      <Head>
        <title>Modal Tani - Program</title>
      </Head>
      <Navbar user={user} logout={logout} />
      <Section title="Program Modal Tani" subtitle="Bantu Petani, Pilih Program Pertanian. Modali dan Bagi Hasilnya." total="30">
        <ProgramCard
          id={1}
          image="https://bucket.tanifund.com/uploads/projects/58d55ebd-9e45-4882-a85a-2b060209fc4d/280222030745-image.jpg"
          title="Budidaya"
          periode="4 Bulan"
          interest="5%"
          funded="34 juta"
          funding="1 juta"
          type="Budidaya"
          location="Bulukumba"
        />
        <ProgramCard
          id={2}
          image="https://bucket.tanifund.com/uploads/projects/58d55ebd-9e45-4882-a85a-2b060209fc4d/280222030745-image.jpg"
          title="Budidaya"
          periode="4 Bulan"
          interest="5%"
          funded="34 juta"
          funding="1 juta"
          type="Budidaya"
          location="Bulukumba"
        />
        <ProgramCard
          id={3}
          image="https://bucket.tanifund.com/uploads/projects/58d55ebd-9e45-4882-a85a-2b060209fc4d/280222030745-image.jpg"
          title="Budidaya"
          periode="4 Bulan"
          interest="5%"
          funded="34 juta"
          funding="1 juta"
          type="Budidaya"
          location="Bulukumba"
        />
      </Section>
      <Footer />
    </>
  );
};

export default Program;
