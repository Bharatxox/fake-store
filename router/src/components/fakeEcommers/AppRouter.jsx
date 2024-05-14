import HomePage from "./HomePage";
import Cart from "./Cart";
import Product from "./Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:productId" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
