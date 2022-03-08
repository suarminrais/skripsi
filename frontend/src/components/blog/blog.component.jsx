import { removeHtml } from "@/utils/string";
import Link from "next/link";
import React from "react";
import { Button } from "../navbar/navbar.styles";
import { BlogTitle } from "./blog.styles";
import { BlogContent } from "./blog.styles";
import { BlogText } from "./blog.styles";
import { BlogImage } from "./blog.styles";
import { BlogContainer } from "./blog.styles";

const Blog = ({ image, title, body, id }) => {
  return (
    <BlogContainer>
      <BlogImage src={image} />
      <BlogContent>
        <BlogTitle>{title}</BlogTitle>
        <BlogText>{removeHtml(body)}</BlogText>
        <Link href={`/blog/${id}`}>
          <Button ml primary>
            Baca
          </Button>
        </Link>
      </BlogContent>
    </BlogContainer>
  );
};

export default Blog;
