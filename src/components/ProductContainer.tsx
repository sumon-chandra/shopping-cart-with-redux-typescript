import { useSelector } from "react-redux";
import ProductCart from "./ProductCart";
import { RootState } from "../types";

const ProductContainer = () => {
  const products = useSelector((state: RootState) => state.products);

  return (
    <div className="productContainer" id="lws-productContainer">
      {products.length === 0 ? (
        <p className="text-lg font-bold text-black">No product found</p>
      ) : (
        products.map((product) => (
          <ProductCart product={product} key={product.id} />
        ))
      )}
    </div>
  );
};

export default ProductContainer;
