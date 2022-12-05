import { Blogs } from "../../src/components/AllBlogs";
import { Blog } from "../../src/interfaces/blog.interface";

export interface IBlogs {
  blogs: Blog[];
}

const ListBlogs = ({ blogs }: IBlogs) => {
  return (
    <div>
      <h1>Blog View</h1>
      <h4> lists of blogs </h4>

      <div>
        <Blogs blogs={blogs} />
      </div>
    </div>
  );
};

export default ListBlogs;

export async function getStaticProps() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await resp.json();

  return {
    props: {
      blogs: data.slice(0, 10),
    },
    revalidate: 10,
  };
}
