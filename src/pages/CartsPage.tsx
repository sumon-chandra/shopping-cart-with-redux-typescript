import CartListContainer from "../components/cart/CartListContainer";

const CartsPage = () => {
  return (
    <main className="py-16">
      <div className="container 2xl:px-8 px-2 mx-auto">
        <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
        <CartListContainer />
      </div>
    </main>
  );
};

export default CartsPage;
