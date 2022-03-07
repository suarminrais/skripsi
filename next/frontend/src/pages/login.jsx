import Card from "@/components/card/card.component";
import { Input } from "@/components/card/card.styles";
import Footer from "@/components/footer/footer.component";
import Navbar from "@/components/navbar/navbar.component";
import { Button } from "@/components/navbar/navbar.styles";
import Head from "next/head";
import React from "react";

const Login = () => {
  return (
    <>
      <Head>
        <title>Modal Tani - Login</title>
      </Head>
      <Navbar />
      <Card title="Login Modal Tani" subtitle="Belum punya akun?" href="/register" to="Register di sini">
        <Input placeholder="Alamat Email" type="text" />
        <Input placeholder="Password" type="password" />
        <Button full primary>
          Masuk
        </Button>
      </Card>
      <Footer />
    </>
  );
};

export default Login;
