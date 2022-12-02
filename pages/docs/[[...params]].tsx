import Link from "next/link";
import { useRouter } from "next/router";

// route exampel as /docs/feature<1....n>/concepts<1....n>
const Docs = () => {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log("🚀 ~ file: [...params].tsx:6 ~ Docs ~ query", params);

  if (params.length === 2) {
    return (
      <div>
        <h2>
          view docs feature {params[0]} and concept {params[1]}
        </h2>
      </div>
    );
  } else if (params.length === 1) {
    return (
      <div>
        <h2>view docs feature {params[0]}</h2>
      </div>
    );
  }

  return (
    <div>
      <h1>Docs VIEW</h1>

      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    </div>
  );
};

export default Docs;
