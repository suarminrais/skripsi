import Footer from "@/components/footer/footer.component";
import Navbar from "@/components/navbar/navbar.component";
import { Container } from "@/components/navbar/navbar.styles";
import ProgramCard from "@/components/program/program-card.component";
import Program from "@/components/program/program.component";
import { ProgramDetailLeft } from "@/components/program/program.styles";
import { ProgramDetailTitle } from "@/components/program/program.styles";
import { ProgramIcon } from "@/components/program/program.styles";
import { ProgramDetailNav } from "@/components/program/program.styles";
import { ProgramDetailNavContent } from "@/components/program/program.styles";
import { ProgramDetailDivider } from "@/components/program/program.styles";
import { ProgramDetailRight } from "@/components/program/program.styles";
import { ProgramDetailFooter } from "@/components/program/program.styles";
import { ProgramDetailHeading } from "@/components/program/program.styles";
import { ProgramDetailNavContentMap } from "@/components/program/program.styles";
import { ProgramDetailNavItem } from "@/components/program/program.styles";
import { ProgramType } from "@/components/program/program.styles";
import { ProgramLocation } from "@/components/program/program.styles";
import { ProgramDetailType } from "@/components/program/program.styles";
import { ProgramDetailContent } from "@/components/program/program.styles";
import { ProgramDetailImage } from "@/components/program/program.styles";
import { ProgramDetailContainer } from "@/components/program/program.styles";
import Head from "next/head";
import React, { useState } from "react";

const ProgramDetail = () => {
  const [active, setActive] = useState(1);

  const checkActive = (id) => (active === id ? true : false);

  return (
    <>
      <Head>
        <title>Modal Tani - Program Detail</title>
      </Head>
      <Navbar />
      <ProgramDetailContainer>
        <Container>
          <ProgramDetailImage src="https://bucket.tanifund.com/uploads/projects/58d55ebd-9e45-4882-a85a-2b060209fc4d/280222030745-image.jpg" />
          <ProgramDetailContent>
            <ProgramDetailLeft>
              <ProgramDetailType>Asadsa ASdas</ProgramDetailType>
              <ProgramDetailTitle>Program Budidaya Jagung Moncongloe</ProgramDetailTitle>
              <ProgramLocation>
                <ProgramIcon src="/map.png" />
                <ProgramType mb>Bulukumba</ProgramType>
              </ProgramLocation>
              <ProgramDetailNav>
                <ProgramDetailNavItem active={checkActive(1)} onClick={() => setActive(1)}>
                  Deskripsi Program
                </ProgramDetailNavItem>
                <ProgramDetailNavItem active={checkActive(2)} onClick={() => setActive(2)}>
                  Lokasi Program
                </ProgramDetailNavItem>
              </ProgramDetailNav>
              <ProgramDetailNavContent
                active={checkActive(1)}
                dangerouslySetInnerHTML={{
                  __html:
                    "<p>Selama masa pandemi, perhatian terhadap ketahanan pangan menjadi isu sentral di berbagai belahan dunia. Pertumbuhan sektor pertanian selama pandemi pun tidak bisa dianggap remeh, selalu positif meski sektor lain mengalami kontraksi. Sepanjang 2020 sektor pertanian berhasil tumbuh 2,1 persen, dan tren positif ini berlangsung setidaknya hingga kuartal ke-II 2021 dengan tumbuh 0,38 persen. Dari serapan tenaga kerja, penurunan di sektor manufaktur dan sektor usaha lain sebagian beralih profesi menjadi petani di pedesaan. Serapan tenaga kerja di sektor pertanian justru berhasil terjaga di 29,5 persen per Februari 2021, bahkan meningkat 0,36 persen dari tahun sebelumnya.</p><p>Prospek investasi di sektor pertanian dalam bentuk PMA tercatat US$208 juta di kuartal ke-II 2021, tumbuh 10,6 persen <em>year-on-year</em>. Fenomena resiliensi&nbsp;sektor pertanian dalam menghadapi gempuran badai krisis pandemi juga tercermin dari rally di harga komoditas pertanian global. Sebagai contoh harga kopi di pasar internasional telah naik 53,2 persen sejak awal tahun 2021, disusul oleh komoditas jagung tumbuh 11,5 persen dan teh 8,3 persen. Meskipun beberapa negara tujuan ekspor melakukan pengetatan akibat lonjakan varian Delta Covid-19, ternyata tak menyurutkan permintaan di sektor pertanian. Kenapa? Karena pangan adalah kebutuhan pokok.</p>",
                }}
              />
              <ProgramDetailNavContentMap
                active={checkActive(2)}
                width="100%"
                height="500"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?q=-5.1585186,119.5362168&amp;hl=en&amp;z=14&amp;output=embed"
              />
            </ProgramDetailLeft>
            <ProgramDetailRight>
              <ProgramCard title="Budidaya" periode="4 Bulan" interest="5%" funded="Rp 34 juta" funding="Rp 1 juta" type="Budidaya" location="Bulukumba" />
            </ProgramDetailRight>
          </ProgramDetailContent>
          <ProgramDetailDivider />
          <ProgramDetailHeading>Program Terkait</ProgramDetailHeading>
          <ProgramDetailFooter>
            <Program
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
            <Program
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
            <Program
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
          </ProgramDetailFooter>
        </Container>
      </ProgramDetailContainer>
      <Footer />
    </>
  );
};

export default ProgramDetail;
