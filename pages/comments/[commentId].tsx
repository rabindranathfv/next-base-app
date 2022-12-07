import { useRouter } from "next/router";
import { GetServerSidePropsContext } from "next/types";
import React, { useEffect, useState } from "react";

import styled from "styled-components";

interface Comment {
  id: Number;
  text: string;
}

const ComentsStyled = styled.p`
  font-size: 36px;
  color: ${({ theme }) => theme.colors.primary};
`;

const CommentDetail = (props: any) => {
  console.log("🚀 ~ file: [commentId].tsx:13 ~ CommentDetail ~ props", props);

  const router = useRouter();
  const { commentId } = router.query;

  const [comment, setComment] = useState<Partial<Comment> | Comment>({});

  const getCommentById = async (id: string | string[]) => {
    const resp = await fetch(`/api/comments/${id}`);
    const data = await resp.json();

    setComment(data);
  };

  useEffect(() => {
    getCommentById(commentId ?? "1");
  }, [commentId]);

  return (
    <div>
      <h1>CommentDetail of {commentId}</h1>

      <ComentsStyled>
        {comment.id?.toString()} - {comment.text}
      </ComentsStyled>
    </div>
  );
};

export default CommentDetail;

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3000/api/comments/`);
  const data = await res.json();

  const paths = data.map((c: Comment) => ({
    params: { commentId: c.id.toString() },
  }));

  return {
    paths,
    // fallback: true make request on build time, generate new static files with those request and you can use router with isFallback property if needed for give UI Feedback,
    // fallback: blocking request on build time, generate new static files but doest have any connection with UI Interface
    fallback: false,
  };
}

export async function getStaticProps(context: GetServerSidePropsContext) {
  const { params } = context;
  const res = await fetch(
    `http://localhost:3000/api/comments/${params?.commentId}`
  );
  const data = await res.json();

  return {
    props: {
      comment: data,
    },
  };
}
