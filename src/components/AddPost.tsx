"use client";

import { addPost } from "@/actions/posts-actions";

export function AddPost() {
  return (
    <div>
      <form action={addPost}>
        <input required type="text" name="title" placeholder="Title" />
        <input required type="text" name="content" placeholder="Content" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
