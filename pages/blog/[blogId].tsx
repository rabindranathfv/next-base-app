import { useRouter } from "next/router";
import { GetServerSidePropsContext } from "next/types";
import { ParsedUrlQuery } from "querystring";
import { IBlog } from "../../src/components/blogDetail";
import { Blog } from "../../src/interfaces/blog.interface";

const Blog = ({ blog }: IBlog) => {
  const route = useRouter();
  const { blogId } = route.query;
  return (
    <div id={blogId?.toString()}>
      <pre>{JSON.stringify(blog, null, 0)}</pre>
      <h2> Title: {blog.title}</h2>
      <p>Content: {blog.body}</p>
      <p>Power By userId: {blog.userId.toString()}</p>
    </div>
  );
};

export default Blog;

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.slice(0, 10).map((blog: Blog) => ({
    params: { blogId: blog.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context: GetServerSidePropsContext) {
  const { params } = context;
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.blogId}`
  );
  const data = await resp.json();
  console.log("🚀 ~ file: index.tsx:24 ~ getStaticProps ~ data", data);

  return {
    props: {
      blog: data,
    },
  };
}
