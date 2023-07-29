import { useSelector } from "react-redux";
import BillDetails from "./BillDetails";
import CartItem from "./CartItem";
import { RootState } from "../../types";

const CartListContainer = () => {
  const carts = useSelector((state: RootState) => state.carts);
  return (
    <>
      <div className="cartListContainer">
        {carts.map((cart) => (
          <CartItem cart={cart} key={cart.id} />
        ))}
      </div>
      <BillDetails />
    </>
  );
};

export default CartListContainer;
