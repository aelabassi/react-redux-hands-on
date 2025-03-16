import { Link } from "react-router-dom";
import { RANDOM_PRODUCTS } from "../utils";
import classes from "./RouteLayout.module.css";
export default function Products() {
  return (
    <>
      {RANDOM_PRODUCTS.map((product) => (
        <main className={classes.content}>
          <div key={product.id}>
            <Link to={`/products/${product.id}`}>
              <h2>{product.name}</h2>
            </Link>
          </div>
        </main>
      ))}
    </>
  );
}
