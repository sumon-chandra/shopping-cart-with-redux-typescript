import { Dispatch, SetStateAction } from "react";
import logo from "../assets/logo.png";
import { useSelector } from "react-redux";
import { RootState } from "../types";
type PageToggleType = {
  setPage: Dispatch<SetStateAction<string>>;
};
const Navbar = ({ setPage }: PageToggleType) => {
  const cart = useSelector((state: RootState) => state.carts);

  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <a href="index.html">
          <img src={logo} alt="LWS" className="max-w-[140px]" />
        </a>

        <div className="flex gap-4">
          <a
            onClick={() => setPage("home")}
            className="navHome cursor-pointer"
            id="lws-home"
          >
            Home
          </a>
          <a
            onClick={() => setPage("cartPage")}
            className="navCart cursor-pointer"
            id="lws-cart"
          >
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">{cart.length}</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
