import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

interface Comment {
  id: Number;
  text: string;
}

const CommentDetail = () => {
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

      {Object.keys(comment).length > 0 && <p>{comment.text}</p>}
    </div>
  );
};

export default CommentDetail;
