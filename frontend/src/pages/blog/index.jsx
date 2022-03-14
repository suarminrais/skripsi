import BlogCard from "@/components/blog/blog.component";
import DataTable from "@/components/datatable/datatable.component";
import Footer from "@/components/footer/footer.component";
import Navbar from "@/components/navbar/navbar.component";
import Section from "@/components/section/section.components";
import { useAuth } from "@/hooks/auth";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import _, { set } from 'lodash';
import Modal from "@/components/modal/modal.component";
import { Form } from "@/components/form/form.component";
import { InputLabel } from "@/components/form/form.component";
import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import dynamic from "next/dynamic";
import { useModal } from "@/hooks/modal";
import DataTableWrapper from "@/components/datatable/datatable-wrapper.component";
import { confirm } from "@/utils/alert";
import axios from "@/lib/axios";

const EditorForm = dynamic(() => import('../../components/form/form-editor.component'), { ssr: false });
const Blog = () => {
  const { user, logout, blog, createBlog, deleteBlog, editBlog } = useAuth({ middleware: 'guest' });
  const [show, handleClick] = useModal();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [description, setWysiwyg] = useState(EditorState.createEmpty());
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (errors.length > 0) alert(errors)
  }, [errors]);

  useEffect(() => {
    setBlogs(_.slice(blog?.data, 0, 3))
  }, [blog]);

  if (user?.type === 'admin') {
    const handleSubmit = async ({ isEdit = false, id }) => {
      const formData = new FormData();
      formData.append('name', name)
      if (image) formData.append('image', image)
      formData.append('description', draftToHtml(convertToRaw(description?.getCurrentContent())))
      if (isEdit) formData.append('_method', 'put')
      setLoading(true)
      isEdit ? await editBlog({
        id,
        formData,
        handleClick,
        setErrors,
      }) : await createBlog({ formData, setErrors, handleClick })
      setLoading(false)
    }

    const onDelete = (id) => {
      confirm({
        title: 'Kamu yakin ?'
      }).then(({ isConfirmed }) => {
        if (isConfirmed)
          deleteBlog({
            id,
          })
      });
    }

    const onEdit = async (id) => {
      const { data } = await axios
        .get(`/api/v1/blog/${id}`)
      setIsEdit(true)
      setId(id)
      handleClick()
      setName(data.name)
    }

    const columns = [
      { title: "Name", field: "name" },
      {
        title: "Action",
        formatter: (_, id) => {
          return <><a onClick={() => onEdit(id)} class='btn btn-warning'>Edit</a> <a onClick={() => onDelete(id)} class='btn btn-danger'>Hapus</a></>;
        },
      },
    ];

    const handleCreateBlog = () => {
      handleClick();
      setId()
      setIsEdit(false);
      setName('');
    }

    return (
      <>
        <Head>
          <title>Modal Tani - Blog</title>
        </Head>
        <Navbar user={user} logout={logout} />
        <DataTableWrapper title="Data Blog" handleClick={handleClick}>
          {
            blog && <DataTable data={blog?.data} columns={columns} />
          }
        </DataTableWrapper>
        <Modal show={show} loading={loading} handleClick={handleCreateBlog} title={isEdit ? "Edit Blog" : "Buat Blog"} handleSubmit={() => handleSubmit({
          isEdit,
          id,
        })}>
          <Form>
            <InputLabel value={name} onChange={e => setName(e.target.value)} label="Nama Blog" type="text" />
            <InputLabel onChange={e => setImage(e.target.files[0])} label="Foto Blog" type="file" accept="image/*" />
            <EditorForm state={description} setState={setWysiwyg} />
          </Form>
        </Modal>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Modal Tani - Blog</title>
      </Head>
      <Navbar user={user} logout={logout} />
      <Section title="Blog Modal Tani" subtitle="Bantu Petani, Pilih Program Pertanian. Modali dan Bagi Hasilnya." total="3">
        {
          blogs?.length > 0 ? blogs.map(data => <BlogCard
            key={data.id}
            id={data.id}
            image={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/images/${data.image.name}`}
            title={data.name}
            body={data.description}
          />) : <p>Belum ada data</p>
        }
      </Section>
      <Footer />
    </>
  );
};

export default Blog;
