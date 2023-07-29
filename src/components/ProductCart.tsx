import { useDispatch } from "react-redux";
import { ProductTypes } from "../types";
import { addToCart } from "../redux/features/cart/actions";

type ProductCartType = {
  product: ProductTypes;
};
const ProductCart = ({ product }: ProductCartType) => {
  const dispatch = useDispatch();
  const { title, category, image, price, quantity } = product;
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  return (
    <div className="lws-productCard">
      <img className="lws-productImage" src={image} alt="product" />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">{title}</h4>
        <p className="lws-productCategory">{category}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span className="lws-price">{price}</span>
          </p>
          <p className="productQuantity">
            QTY <span className="lws-quantity">{quantity}</span>
          </p>
        </div>
        <button
          disabled={quantity === 0}
          onClick={handleAddToCart}
          className="lws-btnAddToCart"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
