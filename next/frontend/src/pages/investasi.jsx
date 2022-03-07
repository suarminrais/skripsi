import CardInvestation from "@/components/card/card-investation.component";
import Footer from "@/components/footer/footer.component";
import { InputLabel } from "@/components/form/form.component";
import { EditorForm } from "@/components/form/form.component";
import { Form } from "@/components/form/form.component";
import InvestationCard from "@/components/investation/investation-card.component";
import { InvestationColumn } from "@/components/investation/investation.styles";
import { InvestationBody } from "@/components/investation/investation.styles";
import { InvestationHeading } from "@/components/investation/investation.styles";
import { InvestationContainer } from "@/components/investation/investation.styles";
import Modal from "@/components/modal/modal.component";
import Navbar from "@/components/navbar/navbar.component";
import { Button } from "@/components/navbar/navbar.styles";
import { Container } from "@/components/navbar/navbar.styles";
import { useAuth } from "@/hooks/auth";
import { useModal } from "@/hooks/modal";
import Head from "next/head";
import React, { useState } from "react";

const Investation = () => {
  const [show, handleClick] = useModal();
  const [wysiwyg, setWysiwyg] = useState("");
  const { user, logout } = useAuth({ middleware: 'auth' });

  return (
    <>
      <Head>
        <title>Modal Tani - Investasi</title>
      </Head>
      <Navbar user={user} logout={logout} />
      <InvestationContainer>
        <Container>
          <InvestationBody>
            <CardInvestation
              name="Aco"
              image="https://dashboard.vestanesia.com/storage/customer/1605060672-users.png"
              balance="12.000"
              activeProgram="2"
              doneProgram="2"
              invested="13.000"
              status="Aktif"
            />
            <InvestationColumn>
              <InvestationHeading>Program Aktif</InvestationHeading>
              <Button primary full onClick={handleClick}>
                Mulai Investasi
              </Button>
              <InvestationCard
                image="https://bucket.tanifund.com/uploads/projects/58d55ebd-9e45-4882-a85a-2b060209fc4d/280222030745-image.jpg"
                title="Budidaya"
                periode="4 Bulan"
                interest="5%"
                funded="34 juta"
                funding="1 juta"
                type="Budidaya"
                location="Bulukumba"
                status="Belum Bayar"
                total="12.000"
              />
              <InvestationCard
                image="https://bucket.tanifund.com/uploads/projects/58d55ebd-9e45-4882-a85a-2b060209fc4d/280222030745-image.jpg"
                title="Budidaya"
                periode="4 Bulan"
                interest="5%"
                funded="34 juta"
                funding="1 juta"
                type="Budidaya"
                location="Bulukumba"
                status="Belum Bayar"
                total="12.000"
              />
            </InvestationColumn>
          </InvestationBody>
        </Container>
      </InvestationContainer>
      <Modal show={show} handleClick={handleClick} title="Buat Program">
        <Form>
          <InputLabel label="Nama Program" type="text" />
          <InputLabel label="Tipe Program" type="text" />
          <InputLabel label="Lokasi Program" type="text" />
          <InputLabel label="Latitude Lokasi" type="text" />
          <InputLabel label="Longitude Lokasi" type="text" />
          <InputLabel label="Lama Program" type="number" />
          <InputLabel label="Bunga Program" type="number" />
          <InputLabel label="Target Dana" type="number" />
          <InputLabel label="Foto Program" type="file" accept="image/*" />
          <InputLabel label="Deskripsi Program" hide type="text" />
          <EditorForm state={wysiwyg} setState={setWysiwyg} />
        </Form>
      </Modal>
      <Footer />
    </>
  );
};

export default Investation;
