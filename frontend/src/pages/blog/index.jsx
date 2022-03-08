import BlogCard from "@/components/blog/blog.component";
import DataTable from "@/components/datatable/datatable.component";
import Footer from "@/components/footer/footer.component";
import Navbar from "@/components/navbar/navbar.component";
import Section from "@/components/section/section.components";
import { useAuth } from "@/hooks/auth";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import _ from 'lodash';
import Modal from "@/components/modal/modal.component";
import { Form } from "@/components/form/form.component";
import { InputLabel } from "@/components/form/form.component";
import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import dynamic from "next/dynamic";
import { useModal } from "@/hooks/modal";
import DataTableWrapper from "@/components/datatable/datatable-wrapper.component";

const EditorForm = dynamic(() => import('../../components/form/form-editor.component'), { ssr: false });
const Blog = () => {
  const { user, logout, blog, createBlog } = useAuth({ middleware: 'guest' });
  const [show, handleClick] = useModal();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
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
    const handleSubmit = async () => {
      const formData = new FormData();
      formData.append('name', name)
      formData.append('image', image)
      formData.append('description', draftToHtml(convertToRaw(description?.getCurrentContent())))
      setLoading(true)
      await createBlog({ formData, setErrors, handleClick })
      setLoading(false)
    }

    const columns = [
      { title: "Id", field: "id", width: 70 },
      { title: "Name", field: "name" },
      { title: "Description", field: "description" },
      { title: "Action", width: 180 },
    ];

    return (
      <>
        <Head>
          <title>Modal Tani - Blog</title>
        </Head>
        <Navbar user={user} logout={logout} />
        <DataTableWrapper title="Data Blog" handleClick={handleClick}>
          {
            (blog && blog?.data.length > 0) && <DataTable data={blog?.data} columns={columns} />
          }
        </DataTableWrapper>
        <Modal show={show} loading={loading} handleClick={handleClick} title="Buat Blog" handleSubmit={handleSubmit}>
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
          blogs?.length > 0 && blogs.map(data => <BlogCard
            key={data.id}
            id={data.id}
            image={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/images/${data.image.name}`}
            title={data.name}
            body={data.description}
          />)
        }
      </Section>
      <Footer />
    </>
  );
};

export default Blog;
