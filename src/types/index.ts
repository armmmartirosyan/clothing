export type AddPostActionType = (formData: FormData) => Promise<{ error: any }>;

export type GetPostsResult = { posts: Post[] };

export type Post = {
  id: string;
  title: string;
  content: string;
  published: boolean;
  author: {
    name: string;
  };
  authorId: string;
};
