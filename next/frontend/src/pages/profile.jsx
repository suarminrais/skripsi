import Card from "@/components/card/card.component";
import Footer from "@/components/footer/footer.component";
import { Form } from "@/components/form/form.component";
import { InputLabel } from "@/components/form/form.component";
import Navbar from "@/components/navbar/navbar.component";
import { Button } from "@/components/navbar/navbar.styles";
import Head from "next/head";
import React from "react";

const Profile = () => {
  return (
    <>
      <Head>
        <title>Modal Tani - Profile</title>
      </Head>
      <Navbar />
      <Card title="Edit Profile">
        <Form>
          <InputLabel full label="Foto Profile" type="file" accept="image/*" />
          <InputLabel full label="Nama" type="text" />
          <InputLabel full label="Email" type="email" />
          <InputLabel full label="Password" type="password" />
          <InputLabel full label="Ulangi Password" type="password" />
        </Form>
        <Button full primary>
          Edit
        </Button>
      </Card>
      <Footer />
    </>
  );
};

export default Profile;
