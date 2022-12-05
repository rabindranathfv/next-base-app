import { useRouter } from "next/router";
import { GetServerSidePropsContext } from "next/types";
import BlogDetail, { IBlog } from "../../src/components/blogDetail";
import { Blog } from "../../src/interfaces/blog.interface";

const Blog = ({ blog }: IBlog) => {
  const route = useRouter();
  const { blogId } = route.query;
  return (
    <div id={blogId?.toString()}>
      <BlogDetail blog={blog} />
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

  return {
    paths,
    // fallback: true make request on build time, generate new static files with those request and you can use router with isFallback property if needed for give UI Feedback,
    // fallback: blocking request on build time, generate new static files but doest have any connection with UI Interface
    fallback: false,
  };
}

export async function getStaticProps(context: GetServerSidePropsContext) {
  const { params } = context;
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.blogId}`
  );
  const data = await resp.json();

  return {
    props: {
      blog: data,
    },
    // if you want to use ISR, you can use option revalidate setup on seconds for make request
    // this option affect on build time and production after renerate ssg with requests
    // nextJs handle the data with his internal cache
    revalidate: 10, // works better getting data from and API
  };
}
