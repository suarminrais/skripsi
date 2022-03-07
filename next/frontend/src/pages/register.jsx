import Card from "@/components/card/card.component";
import { Input } from "@/components/card/card.styles";
import Footer from "@/components/footer/footer.component";
import { Checkbox } from "@/components/form/form.component";
import Navbar from "@/components/navbar/navbar.component";
import { Button } from "@/components/navbar/navbar.styles";
import Head from "next/head";
import React from "react";

const Login = () => {
  return (
    <>
      <Head>
        <title>Modal Tani - Register</title>
      </Head>
      <Navbar />
      <Card title="Register Modal Tani" subtitle="Sudah punya akun?" href="/login" to="Login di sini">
        <Input placeholder="Nama" type="text" />
        <Input placeholder="Alamat Email" type="text" />
        <Input placeholder="Password" type="password" />
        <Input placeholder="Ulangi Password" type="password" />
        <Checkbox label="Pemodal" value="pemodal" name="type" />
        <Button full primary>
          Daftar
        </Button>
      </Card>
      <Footer />
    </>
  );
};

export default Login;
