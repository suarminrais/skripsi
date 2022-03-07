import Card from "@/components/card/card.component";
import { Input } from "@/components/card/card.styles";
import Footer from "@/components/footer/footer.component";
import { Loader } from "@/components/loader/loader.styles";
import Navbar from "@/components/navbar/navbar.component";
import { Button } from "@/components/navbar/navbar.styles";
import { useAuth } from "@/hooks/auth";
import Head from "next/head";
import React, { useEffect, useState } from "react";

const Login = () => {

  const { login } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/investasi',
  })

  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])

  const handleClick = async () => {
    setLoading(true)
    login({ email, password, setLoading, setErrors })
  }

  useEffect(() => {
    if (errors.length > 0) alert(errors)
  }, [errors]);

  return (
    <>
      <Head>
        <title>Modal Tani - Login</title>
      </Head>
      <Navbar />
      <Card title="Login Modal Tani" subtitle="Belum punya akun?" href="/register" to="Register di sini">
        <Input value={email} onChange={e => setEmail(e.target.value)} placeholder="Alamat Email" type="text" />
        <Input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" />
        <Button full primary onClick={handleClick}>
          {loading ? <Loader /> : 'Masuk'}
        </Button>
      </Card>
      <Footer />
    </>
  );
};

export default Login;
