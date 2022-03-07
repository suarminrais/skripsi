import Card from "@/components/card/card.component";
import { Input } from "@/components/card/card.styles";
import Footer from "@/components/footer/footer.component";
import { Checkbox } from "@/components/form/form.component";
import { Loader } from "@/components/loader/loader.styles";
import Navbar from "@/components/navbar/navbar.component";
import { Button } from "@/components/navbar/navbar.styles";
import { useAuth } from "@/hooks/auth";
import Head from "next/head";
import React, { useEffect, useState } from "react";

const Login = () => {
  const { register } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/investasi'
  })
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirmation, setPasswordConfirmation] = useState('')
  const [type, setType] = useState('')
  const [errors, setErrors] = useState([])

  const handleClick = () => {
    setLoading(true)
    register({ name, email, password, password_confirmation, setLoading, setErrors });
  }

  useEffect(() => {
    if (errors.length > 0) alert(errors)
  }, [errors]);

  return (
    <>
      <Head>
        <title>Modal Tani - Register</title>
      </Head>
      <Navbar />
      <Card title="Register Modal Tani" subtitle="Sudah punya akun?" href="/login" to="Login di sini">
        <Input value={name} onChange={e => setName(e.target.value)} placeholder="Nama" type="text" />
        <Input value={email} onChange={e => setEmail(e.target.value)} placeholder="Alamat Email" type="text" />
        <Input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" />
        <Input value={password_confirmation} onChange={e => setPasswordConfirmation(e.target.value)} placeholder="Ulangi Password" type="password" />
        <Checkbox label="Pemodal" value={type} onChecked={() => setType('pemodal')} name="type" />
        <Button full primary onClick={handleClick}>
          {loading ? <Loader /> : 'Daftar'}
        </Button>
      </Card>
      <Footer />
    </>
  );
};

export default Login;
