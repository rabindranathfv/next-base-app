import { Blog } from "../interfaces/blog.interface";

export interface IBlog {
  blog: Blog;
}

const BlogDetail = ({ blog }: IBlog) => {
  return (
    <>
      <h2> Title: {blog.title}</h2>
      <p>Content: {blog.body}</p>
      <p>Power By userId: {blog.userId.toString()}</p>
    </>
  );
};

export default BlogDetail;
