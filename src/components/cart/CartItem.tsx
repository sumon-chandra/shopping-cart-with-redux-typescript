import { useDispatch } from "react-redux";
import { ProductTypes } from "../../types";
import {
  addToCart,
  deleteCartItem,
  removeCartQuantity,
} from "../../redux/features/cart/actions";

interface CatPropTypes {
  cart: ProductTypes;
}

const CartItem = ({ cart }: CatPropTypes) => {
  const dispatch = useDispatch();
  const { title, category, image, price, cartQuantity } = cart;

  const handleRemoveQuantity = () => {
    dispatch(removeCartQuantity(cart));
  };

  const handleAddQuantity = () => {
    dispatch(addToCart(cart));
  };

  const handleDelete = () => {
    dispatch(deleteCartItem(cart));
  };

  return (
    <div className="cartCard space-y-6">
      <div className="flex items-center col-span-6 space-x-6">
        {/* <!-- cart image --> */}
        <img className="lws-cartImage" src={image} alt="product" />
        {/* <!-- cart item info --> */}
        <div className="space-y-2">
          <h4 className="lws-cartName">{title}</h4>
          <p className="lws-cartCategory">{category}</p>
          <p>
            BDT <span className="lws-cartPrice">{price}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        {/* <!-- amount buttons --> */}
        <div className="flex items-center space-x-4">
          <button onClick={handleAddQuantity} className="lws-incrementQuantity">
            <i className="text-lg fa-solid fa-plus"></i>
          </button>
          <span className="lws-cartQuantity">{cartQuantity}</span>
          <button
            onClick={handleRemoveQuantity}
            className="lws-decrementQuantity"
          >
            <i className="text-lg fa-solid fa-minus"></i>
          </button>
        </div>
        {/* <!-- price --> */}
        <p className="text-lg font-bold">
          BDT <span className="lws-calculatedPrice">2200</span>
        </p>
      </div>
      {/* <!-- delete button --> */}
      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button onClick={handleDelete} className="lws-removeFromCart">
          <i className="text-lg text-red-400 fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
