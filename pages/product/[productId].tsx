import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();
  console.log("🚀 ~ file: [productId].tsx:5 ~ ProductDetails ~ router", router);
  return (
    <div>
      <h1>ProductDetails VIEW {router.query.productId}</h1>
    </div>
  );
};

export default ProductDetails;
