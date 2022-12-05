import Link from "next/link";
import { IBlogs } from "../../pages/blog";
import { Blog } from "../interfaces/blog.interface";

export const Blogs = ({ blogs }: IBlogs) => {
  console.log("🚀 ~ file: AllBlogs.tsx:6 ~ Blogs ~ blogs", blogs);
  return (
    <>
      {blogs.map((blog: Blog) => {
        return (
          <div key={blog.id.toString()}>
            <p>title: {blog.title}</p>
            <p>
              <Link href={`blog/${blog.id}`}>
                <a>more info</a>
              </Link>
            </p>
            <hr />
          </div>
        );
      })}
    </>
  );
};
