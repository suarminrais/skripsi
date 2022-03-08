import Blog from "@/components/blog/blog.component";
import { BlogDetailImage } from "@/components/blog/blog.styles";
import { BlogDetailDivider } from "@/components/blog/blog.styles";
import { BlogDetailContent } from "@/components/blog/blog.styles";
import { BlogDetailHeader } from "@/components/blog/blog.styles";
import { BlogDetailFooter } from "@/components/blog/blog.styles";
import { BlogDetailHeading } from "@/components/blog/blog.styles";
import { BlogDetailContainer } from "@/components/blog/blog.styles";
import Footer from "@/components/footer/footer.component";
import Navbar from "@/components/navbar/navbar.component";
import { Container } from "@/components/navbar/navbar.styles";
import { useAuth } from "@/hooks/auth";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import _ from 'lodash';
import { useRouter } from "next/router";

const BlogDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const { user, logout, blog, blogDetail } = useAuth({ middleware: 'guest', id });
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(_.slice(_.filter(blog?.data, (e) => e.id !== id), 0, 3));
  }, [blog])

  return (
    <>
      <Head>
        <title>Modal Tani - Blog Detail</title>
      </Head>
      <Navbar user={user} logout={logout} />
      <BlogDetailContainer>
        <Container>
          <BlogDetailImage src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/images/${blogDetail?.image.name}`} />
          <BlogDetailHeader>{blogDetail?.name}</BlogDetailHeader>
          <BlogDetailContent
            dangerouslySetInnerHTML={{
              __html: blogDetail?.description,
            }}
          />
          <BlogDetailDivider />
          <BlogDetailHeading>Blog Terkait</BlogDetailHeading>
          <BlogDetailFooter>
            {
              blogs?.length > 0 && blogs.map(data => <Blog
                key={data.id}
                id={data.id}
                image={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/images/${data.image.name}`}
                title={data.name}
                body={data.description}
              />)
            }
          </BlogDetailFooter>
        </Container>
      </BlogDetailContainer>
      <Footer />
    </>
  );
};

export default BlogDetail;
