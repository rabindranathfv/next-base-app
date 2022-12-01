import { useRouter } from "next/router";

const ReviewDetails = () => {
  const router = useRouter();
  console.log("🚀 ~ file: [reviewId].tsx:5 ~ ReviewDetails ~ router", router);
  const { productId, reviewId } = router.query;
  return (
    <div>
      <h1>ReviewDetails VIEW</h1>
      <p> productId: {productId}</p>
      <p> reviewId: {reviewId}</p>
    </div>
  );
};

export default ReviewDetails;
