import Card from "@/components/card/card.component";
import Footer from "@/components/footer/footer.component";
import { Form } from "@/components/form/form.component";
import { InputLabel } from "@/components/form/form.component";
import { Loader } from "@/components/loader/loader.styles";
import Navbar from "@/components/navbar/navbar.component";
import { Button } from "@/components/navbar/navbar.styles";
import { useAuth } from "@/hooks/auth";
import Head from "next/head";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const { user, logout, update } = useAuth({ middleware: 'auth' });

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [image, setImage] = useState()
  const [password_confirmation, setPasswordConfirmation] = useState()
  const [errors, setErrors] = useState([])

  const handleClick = async () => {
    const { id } = user;
    const formData = new FormData();
    formData.append('name', name)
    formData.append('email', email)
    if (password) formData.append('password', password)
    if (password_confirmation) formData.append('password_confirmation', password_confirmation)
    formData.append('image', image)
    formData.append('_method', 'put')
    setLoading(true)
    await update({ id, formData, setErrors })
    setLoading(false)
  }

  useEffect(() => {
    if (errors.length > 0) alert(errors)
  }, [errors]);

  useEffect(() => {
    setEmail(user?.email);
    setName(user?.name);
  }, [user]);

  return (
    <>
      <Head>
        <title>Modal Tani - Profile</title>
      </Head>
      <Navbar user={user} logout={logout} />
      <Card title="Edit Profile">
        <Form>
          <InputLabel onChange={e => setImage(e.target.files[0])} full label="Foto Profile" type="file" accept="image/*" />
          <InputLabel value={name} onChange={e => setName(e.target.value)} full label="Nama" type="text" />
          <InputLabel value={email} onChange={e => setEmail(e.target.value)} full label="Email" type="email" />
          <InputLabel value={password} onChange={e => setPassword(e.target.value)} full label="Password" type="password" />
          <InputLabel value={password_confirmation} onChange={e => setPasswordConfirmation(e.target.value)} full label="Ulangi Password" type="password" />
        </Form>
        <Button onClick={handleClick} full primary>
          {loading ? <Loader /> : 'Edit'}
        </Button>
      </Card>
      <Footer />
    </>
  );
};

export default Profile;
