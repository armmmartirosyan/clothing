"use client";

import { useState } from "react";

export function AddPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      fetch("/api/add-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
        }),
      }).then(() => {
        alert("Success!");
        setContent("");
        setTitle("");
      });
    } catch (err) {
      console.log({ err });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={content}
          placeholder="Content"
          onChange={(e) => setContent(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
