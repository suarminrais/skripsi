import Footer from "@/components/footer/footer.component";
import Navbar from "@/components/navbar/navbar.component";
import Section from "@/components/section/section.components";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import ProgramCard from "@/components/program/program.component";
import { useAuth } from "@/hooks/auth";
import DataTableWrapper from "@/components/datatable/datatable-wrapper.component";
import DataTable from "@/components/datatable/datatable.component";
import { confirm } from "@/utils/alert";
import Link from "next/link";
import { perkembanganStatus } from "@/utils/status";

const Program = () => {
  const { user, logout, program, deleteProgram, editProgram } = useAuth({ middleware: 'guest' });
  const [programs, setPrograms] = useState([]);
  const [_, setErrors] = useState([]);

  useEffect(() => {
    setPrograms(program?.data)
  }, [program]);

  if (user?.type === 'admin') {
    const onClick = (id) => {
      confirm({
        title: 'Kamu yakin ?',
        text: '',
        confirmButtonText: 'Terima'
      }).then(({ isConfirmed }) => {
        if (isConfirmed)
          deleteProgram({
            id
          })
      })
    }

    const onClickDelete = (id) => {
      confirm({
        title: 'Kamu yakin ?',
        text: 'Program status akan ditolak!',
        confirmButtonText: 'Tolak',
      }).then(({ isConfirmed }) => {
        if (isConfirmed) {
          const formData = new FormData();
          formData.append('status', '5');
          formData.append('_method', 'put');
          editProgram({
            id,
            formData,
            setErrors,
          })
        }
      });
    }

    const columns = [
      { 
        title: "Name",
        field: "name",
        formatter: (cell, id) => {
          return <Link href={`/program/${id}`}>{cell}</Link>;
        }
      },
      {
        title: "Lama Periode",
        field: "periode",
        formatter: (cell) => {
          return `${cell} bulan`;
        }
      },
      {
        title: "Bagi Hasil",
        field: "interest",
        formatter: (cell) => {
          return `${cell}%`;
        }
      },
      {
        title: "Target Dana",
        field: "funding",
        formatter: (cell) => {
          return `Rp. ${cell.toLocaleString("id-ID")}`;
        }
      },
      { title: "Lokasi", field: "location" },
      { 
        title: "Status", 
        field: "status",
        formatter: (cell) => perkembanganStatus(cell)
      },
      {
        title: "Action",
        field: "status",
        formatter: (cell, id) => {
          return <>{cell === '1' && (<a onClick={() => onClick(id)} class='btn btn-success'>Terima</a>)} <a onClick={() => onClickDelete(id)} class='btn btn-danger'>Tolak</a></>;
        },
      },
    ];

    return (
      <>
        <Head>
          <title>Modal Tani - Program</title>
        </Head>
        <Navbar user={user} logout={logout} />
        <DataTableWrapper title="Data Program">
          {
            program && <DataTable data={program?.data} columns={columns} />
          }
        </DataTableWrapper>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Modal Tani - Program</title>
      </Head>
      <Navbar user={user} logout={logout} />
      <Section title="Program Modal Tani" subtitle="Bantu Petani, Pilih Program Pertanian. Modali dan Bagi Hasilnya." total={program?.total}>
        {
          programs?.length > 0 ? programs.map(data => <ProgramCard
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
          />) : <p>Belum ada data</p>
        }
      </Section>
      <Footer />
    </>
  );
};

export default Program;
