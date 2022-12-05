import Link from "next/link";

export interface New {
  id: Number;
  category: string;
  description: string;
  title: string;
}

export interface INews {
  news: New[];
}

const ListNews = ({ news }: INews) => {
  console.log("🚀 ~ file: index.tsx:14 ~ ListNews ~ news", news);

  return (
    <div>
      <h1> list of NEWS</h1>

      <ul>
        {news.map((nw) => {
          return (
            <Link key={nw.id.toString()} href={`news/${nw.id.toString()}`}>
              <li>
                {nw.title} | {nw.category}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default ListNews;

export async function getServerSideProps() {
  const resp = await fetch("http://localhost:4000/news");
  const data = await resp.json();
  console.log(
    "🚀 ~ file: index.tsx:29 ~ GetServerSidePropsContext ~ data",
    data
  );

  return {
    props: {
      news: data,
    },
  };
}
