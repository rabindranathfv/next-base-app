import React, { useState } from "react";

interface Comment {
  id: Number;
  text: string;
}

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const getAllComments = async () => {
    const resp = await fetch("/api/comments");
    const data = await resp.json();

    setComments(data);
  };

  const createComment = async () => {
    const resp = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ comment }),
    });
    const data = await resp.json();
    console.log("🚀 ~ file: index.tsx:26 ~ createComment ~ data", data);
    getAllComments();
  };

  const deleteById = async (id: Number) => {
    const resp = await fetch(`/api/comments/${id}`, {
      method: "DELETE",
    });
    const data = await resp.json();
    console.log("🚀 ~ file: index.tsx:35 ~ deleteById ~ data", data);
    getAllComments();
  };

  return (
    <div>
      <h1>Comment page consume comments endpoint </h1>

      <input
        type="text"
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button onClick={createComment}>Submit Comment</button>
      <button onClick={getAllComments}>load Comments</button>

      <div>
        <ul>
          {comments.length > 0 &&
            comments.map((c: Comment) => {
              return (
                <>
                  <li key={c.id.toString()}>{c.text}</li>
                  <button onClick={() => deleteById(c.id)}>delete</button>
                </>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Comments;
