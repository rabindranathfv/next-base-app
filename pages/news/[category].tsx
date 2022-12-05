import { useRouter } from "next/router";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from "next/types";
import { ParsedUrlQuery } from "querystring";
import { INews, New } from ".";

const ListNewsByCategory = ({ news }: INews) => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div>
      <h1>NEWS category {category}</h1>

      {news.map((nw: New) => {
        return (
          <div key={nw.id.toString()}>
            <h4>{nw.title}</h4>
            <p>{nw.description}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default ListNewsByCategory;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { params, req, res, query } = context;
  console.log("🚀 ~ file: [category].tsx:37 ~ query", query);
  console.log(req.headers.cookie);
  res.setHeader("Set-Cookie", ["name=LearningNext"]);

  const { category } = params as ParsedUrlQuery;
  const fetchUrl = `http://localhost:4000/news?category=${category}`;
  const resp = await fetch(fetchUrl);

  const data = await resp.json();

  return {
    props: {
      news: data,
      category,
    },
  };
};
