import CardInvestation from "@/components/card/card-investation.component";
import Footer from "@/components/footer/footer.component";
import { Form } from "@/components/form/form.component";
import { InputLabel } from "@/components/form/form.component";
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
import dynamic from "next/dynamic";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { useRouter } from "next/router";

const EditorForm = dynamic(() => import('../components/form/form-editor.component'), { ssr: false });

const Investation = () => {
  const router = useRouter();
  const [show, handleClick] = useModal();
  const { user, logout, createProgram, program } = useAuth({ middleware: 'auth' });
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    setPrograms(program?.data)
  }, [program]);

  useEffect(() => {
    if (user?.type === 'admin') router.replace('/');
  }, [user]);

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [location, setLocation] = useState('')
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [periode, setPeriode] = useState('')
  const [interest, setInterest] = useState('')
  const [funding, setFunding] = useState('')
  const [image, setImage] = useState('')
  const [description, setWysiwyg] = useState(EditorState.createEmpty());
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (errors.length > 0) alert(errors)
  }, [errors]);

  const handleSubmit = async () => {
    const { id } = user;
    const formData = new FormData();
    formData.append('user_id', id)
    formData.append('name', name)
    formData.append('type', type)
    formData.append('location', location)
    formData.append('latitude', latitude)
    formData.append('longitude', longitude)
    formData.append('periode', periode)
    formData.append('interest', interest)
    formData.append('funding', funding)
    formData.append('image', image)
    formData.append('description', draftToHtml(convertToRaw(description?.getCurrentContent())))
    setLoading(true)
    await createProgram({ formData, setErrors, handleClick })
    setLoading(false)
  }

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
              {
                user?.type === 'petani' && <Button primary full onClick={handleClick}>
                  Buat Program
                </Button>
              }
              {
                (user?.type === 'petani' && programs?.length > 0) && programs.map(data => <InvestationCard
                  status={data.status}
                  key={data.id}
                  id={data.id}
                  image={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/images/${data.image.name}`}
                  title={data.name}
                  periode={`${data.periode} Bulan`}
                  interest={`${data.interest}%`}
                  funded={data.funded?.toLocaleString("id-ID")}
                  funding={data.funding?.toLocaleString("id-ID")}
                  type={data.type}
                  location={data.location}
                />)
              }
            </InvestationColumn>
          </InvestationBody>
        </Container>
      </InvestationContainer>
      <Modal show={show} loading={loading} handleClick={handleClick} title="Buat Program" handleSubmit={handleSubmit}>
        <Form>
          <InputLabel value={name} onChange={e => setName(e.target.value)} label="Nama Program" type="text" />
          <InputLabel value={type} onChange={e => setType(e.target.value)} label="Tipe Program" type="text" />
          <InputLabel value={location} onChange={e => setLocation(e.target.value)} label="Lokasi Program" type="text" />
          <InputLabel value={latitude} onChange={e => setLatitude(e.target.value)} label="Latitude Lokasi" type="text" />
          <InputLabel value={longitude} onChange={e => setLongitude(e.target.value)} label="Longitude Lokasi" type="text" />
          <InputLabel value={periode} onChange={e => setPeriode(e.target.value)} label="Lama Program" type="number" />
          <InputLabel value={interest} onChange={e => setInterest(e.target.value)} label="Bunga Program" type="number" />
          <InputLabel value={funding} onChange={e => setFunding(e.target.value)} label="Target Dana" type="number" />
          <InputLabel onChange={e => setImage(e.target.files[0])} label="Foto Program" type="file" accept="image/*" />
          <EditorForm state={description} setState={setWysiwyg} />
        </Form>
      </Modal>
      <Footer />
    </>
  );
};

export default Investation;
