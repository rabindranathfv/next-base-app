import Link from "next/link";

const ProductList = ({ productId = 100 }) => {
  return (
    <div>
      <h1>ProductList VIEW</h1>

      <div>
        <ul>
          <li>
            <Link href={`/product/${productId}`}>
              <a>Product {productId}</a>
            </Link>
          </li>
          <li>
            <Link href="/product/1" replace>
              <a>Product 1</a>
            </Link>
          </li>
          <li>
            <Link href="/product/2">
              <a>Product 2</a>
            </Link>
          </li>
          <li>
            <Link href="/product/3">
              <a>Product 3</a>
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    </div>
  );
};

export default ProductList;
