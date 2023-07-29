import { SyntheticEvent, useRef } from "react";
import { useDispatch } from "react-redux";
import { addNewProduct } from "../redux/features/product/actions";

const InputForm = () => {
  const inputRef = useRef<HTMLFormElement>(null);
  const dispatch = useDispatch();
  const handleSubmitForm = (e: SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      title: { value: string };
      image: { value: string };
      price: { value: number };
      category: { value: string };
      quantity: { value: number };
    };
    const product = {
      id: Math.floor(Math.random() * 1000),
      title: target.title.value,
      image: target.image.value,
      category: target.category.value,
      price: target.price.value,
      quantity: target.quantity.value,
    };
    dispatch(addNewProduct(product));
  };
  return (
    <div className="formContainer">
      <h4 className="formTitle">Add New Product</h4>
      <form
        onSubmit={handleSubmitForm}
        ref={inputRef}
        className="space-y-4 text-[#534F4F]"
        id="lws-addProductForm"
      >
        {/* <!-- product name --> */}
        <div className="space-y-2">
          <label htmlFor="lws-inputName">Product Name</label>
          <input
            className="addProductInput"
            id="lws-inputName"
            type="text"
            name="title"
            required
          />
        </div>
        {/* <!-- product category --> */}
        <div className="space-y-2">
          <label htmlFor="lws-inputCategory">Category</label>
          <input
            className="addProductInput"
            id="lws-inputCategory"
            type="text"
            name="category"
            required
          />
        </div>
        {/* <!-- product image url --> */}
        <div className="space-y-2">
          <label htmlFor="lws-inputImage">Image Url</label>
          <input
            className="addProductInput"
            id="lws-inputImage"
            type="text"
            name="image"
            required
          />
        </div>
        {/* <!-- price & quantity container --> */}
        <div className="grid grid-cols-2 gap-8 pb-4">
          {/* <!-- price --> */}
          <div className="space-y-2">
            <label htmlFor="ws-inputPrice">Price</label>
            <input
              className="addProductInput"
              type="number"
              name="price"
              id="lws-inputPrice"
              required
            />
          </div>
          {/* <!-- quantity --> */}
          <div className="space-y-2">
            <label htmlFor="lws-inputQuantity">Quantity</label>
            <input
              className="addProductInput"
              type="number"
              name="quantity"
              id="lws-inputQuantity"
              required
            />
          </div>
        </div>
        {/* <!-- submit button --> */}
        <button type="submit" id="lws-inputSubmit" className="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default InputForm;
