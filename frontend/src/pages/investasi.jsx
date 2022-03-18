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
import Link from "next/link";
import DataTableWrapper from "@/components/datatable/datatable-wrapper.component";
import DataTable from "@/components/datatable/datatable.component";
import { confirm } from "@/utils/alert";
import { SelectLabel } from "@/components/form/form.component";
import axios from "@/lib/axios";

const EditorForm = dynamic(() => import('../components/form/form-editor.component'), { ssr: false });

const Investation = () => {
  const [show, handleClick] = useModal();
  const { user, logout, createProgram, editProgram, program, invest, updateInvest, deleteInvest } = useAuth({ middleware: 'auth' });
  const [programs, setPrograms] = useState([]);
  const [invests, setInvest] = useState([]);

  useEffect(() => {
    setInvest(invest?.data)
  }, [invest]);

  useEffect(() => {
    setPrograms(program?.data)
  }, [program]);

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('')
  const [type, setType] = useState()
  const [location, setLocation] = useState('')
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [periode, setPeriode] = useState('')
  const [interest, setInterest] = useState('')
  const [funding, setFunding] = useState('')
  const [image, setImage] = useState()
  const [description, setWysiwyg] = useState(EditorState.createEmpty());
  const [errors, setErrors] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState();

  useEffect(() => {
    if (errors.length > 0) alert(errors)
  }, [errors]);

  const handleSubmit = async ({ isEdit = false, id }) => {
    const formData = new FormData();
    formData.append('user_id', user?.id)
    formData.append('name', name)
    formData.append('type', type)
    formData.append('location', location)
    formData.append('latitude', latitude)
    formData.append('longitude', longitude)
    formData.append('periode', periode)
    formData.append('interest', interest)
    formData.append('funding', funding)
    if (image) formData.append('image', image)
    if (isEdit) formData.append('_method', 'put')
    if (description?.getCurrentContent()) formData.append('description', draftToHtml(convertToRaw(description?.getCurrentContent())))
    setLoading(true)
    isEdit ? await editProgram({formData, id, setErrors, handleClick}) : await createProgram({ formData, setErrors, handleClick })
    setLoading(false)
  }

  const onEdit = async (id) => {
    const { data } = await axios
      .get(`/api/v1/program/${id}`)
    setIsEdit(true)
    setId(id)
    handleClick()
    setName(data.name)
    setType(data.type)
    setLocation(data.location)
    setLatitude(data.latitude)
    setLongitude(data.longitude)
    setPeriode(data.periode)
    setInterest(data.interest)
    setFunding(data.funding)
  }

  const handleCreate = () => {
    setIsEdit(false);
    setId();
    handleClick();
  }

  if (user?.type === 'admin') {
    const onClick = (id) => {
      confirm({
        title: 'Kamu yakin ?',
        text: '',
        confirmButtonText: 'Terima'
      }).then(({ isConfirmed }) => {
        if (isConfirmed) {
          const formData = new FormData();
          formData.append('_method', 'put');
          updateInvest({
            id: id,
            formData,
          })
        }
      });
    }
    const onClickDelete = (id) => {
      confirm({
        title: 'Kamu yakin ?',
      }).then(({ isConfirmed }) => {
        if (isConfirmed)
          deleteInvest({
            id
          })
      });
    }
    const columns = [
      { title: "Name", field: "user.name" },
      { title: "Nama Program", field: "program.name", },
      {
        title: "Total Investasi",
        field: "total",
        formatter: (cell) => {
          return `Rp ${cell.toLocaleString("id-ID")}`;
        }
      },
      {
        title: "Target Dana",
        field: "image.name",
        formatter: (cell) => {
          if (cell) return <img height={200} width={200} src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/images/${cell}`} />
          return `-`;
        }
      },
      {
        title: "Action",
        field: 'status',
        formatter: (cell, id) => {
          return <>{!cell && (<a onClick={() => onClick(id)} class='btn btn-success'>Terima</a>)} <a onClick={() => onClickDelete(id)} class='btn btn-danger'>Hapus</a></>;
        },
      },
    ];

    return (
      <>
        <Head>
          <title>Modal Tani - Program</title>
        </Head>
        <Navbar user={user} logout={logout} />
        <DataTableWrapper title="Data Investasi">
          {
            invest && <DataTable data={invest?.data} columns={columns} />
          }
        </DataTableWrapper>
        <Footer />
      </>
    );
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
              name={user?.name}
              image={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/images/${user?.image.name}`}
              balance={user?.total_balance?.toLocaleString('id-ID')}
              activeProgram={user?.active_program}
              doneProgram={user?.done_program}
              invested={user?.total_invest?.toLocaleString('id-ID')}
              status="Aktif"
            />
            <InvestationColumn>
              <InvestationHeading>Program Aktif</InvestationHeading>
              {
                user?.type === 'pemodal' && <Link href="/program"><Button primary full>Investasi</Button></Link>
              }
              {
                user?.type === 'petani' && <Button primary full onClick={handleCreate}>
                  Buat Program
                </Button>
              }
              {
                (user?.type === 'pemodal' && invests?.length > 0) && invests.map(data => <InvestationCard
                  status={data.program.status}
                  key={data.id}
                  id={data.id}
                  image={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/images/${data.program.image.name}`}
                  title={data.program.name}
                  periode={`${data.program.periode} Bulan`}
                  interest={`${data.program.interest}%`}
                  funded={data.program.funded?.toLocaleString("id-ID")}
                  funding={data.program.funding?.toLocaleString("id-ID")}
                  type={data.program.type}
                  location={data.program.location}
                  total={!data.status && data.total.toLocaleString("id-ID")}
                  proveImage={data.image?.name}
                />)
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
                  onEdit={onEdit}
                />)
              }
            </InvestationColumn>
          </InvestationBody>
        </Container>
      </InvestationContainer>
      <Modal show={show} loading={loading} handleClick={handleClick} title={isEdit ? 'Edit Program' : 'Buat Program'} handleSubmit={() => handleSubmit({isEdit, id})}>
        <Form>
          <InputLabel value={name} onChange={e => setName(e.target.value)} label="Nama Program" type="text" />
          <SelectLabel value={type} onChange={e => setType(e.target.value)} label="Tipe Program">
            <option disabled selected>Pilih Tipe Program</option>
            <option value="Tanaman Pangan">Tanaman Pangan</option>
            <option value="Buah-Buahan">Buah-Buahan</option>
            <option value="Sayuran">Sayuran</option>
            <option value="Perikanan">Perikanan</option>
          </SelectLabel>
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
