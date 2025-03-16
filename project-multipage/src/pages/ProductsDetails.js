import { useParams } from "react-router-dom";
import { RANDOM_PRODUCTS } from "../utils";

export default function ProductsDetails() {
  const { productId } = useParams();

  const product = RANDOM_PRODUCTS.find((item) => item.id === Number(productId));

  return (
    <div>
      {product ? (
        <>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </>
      ) : (
        <p>Product not found: {productId}</p>
      )}
    </div>
  );
}
