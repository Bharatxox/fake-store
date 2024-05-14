import { useEffect, useState, useCallback } from "react";
import { getAllProducts } from "./index";
import ProductCard from "./ProductCard";
// import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllProducts()
      .then((data) => setProducts(data))
      .catch(console.log);
  }, []);

  const onProductClick = useCallback(
    (id) => {
      navigate(`/products/${id}`);
    },
    [navigate]
  );

  return (
    <div className="w-full flex flex-col">
      <Header className="md:w-1/4" /> {/* Adjust width for smaller screens */}
      <section className="w-full  relative">
        {/* <h1>homePage</h1> */}
        <div className="w-full flex gap-5 flex-wrap justify-center">
          {products.map((pro) => (
            <ProductCard product={pro} key={pro.id} onClick={onProductClick} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
