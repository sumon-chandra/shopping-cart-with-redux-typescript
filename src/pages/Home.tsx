import InputForm from "../components/InputForm";
import ProductContainer from "../components/ProductContainer";

const Home = () => {
  return (
    <main className="py-16">
      <div className="productWrapper">
        <ProductContainer />
        <div>
          <InputForm />
        </div>
      </div>
    </main>
  );
};

export default Home;
