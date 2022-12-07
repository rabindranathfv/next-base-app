import React, { useState } from "react";

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
    console.log("🚀 ~ file: index.tsx:21 ~ createComment ~ data", data);
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
            comments.map((c) => {
              return <li key={c.id.toString()}>{c.text}</li>;
            })}
        </ul>
      </div>
    </div>
  );
};

export default Comments;
