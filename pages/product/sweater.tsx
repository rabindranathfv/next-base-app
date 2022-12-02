import Link from "next/link";

const Sweater = () => {
  return (
    <div>
      <h1>Sweater VIEW</h1>

      <div>
        <Link href="/product">
          <a>Product</a>
        </Link>
      </div>
    </div>
  );
};

export default Sweater;
