import Navbar from "./components/Navbar";
import CartsPage from "./pages/CartsPage";
import Home from "./pages/Home";
import { useState } from "react";

const App = () => {
  const [page, setPage] = useState("home");
  return (
    <>
      <Navbar setPage={setPage} />
      {page === "home" ? <Home /> : <CartsPage />}
    </>
  );
};

export default App;
