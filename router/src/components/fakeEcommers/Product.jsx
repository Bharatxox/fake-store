// import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { getProductById } from "./index";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import Header from "./Header";

const Product = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    getProductById(productId)
      .then((data) => {
        console.log(data);
        setProduct(data);
      })
      .catch(console.log);
  }, []);

  return (
    <div className=" w-screen flex justify-center flex-col items-center">
      <Header className="md:w-1/4" />
      <div className="flex flex-col md:flex-row justify-between px-4 py-10 max-w-7xl h-700px">
        <div className="md:w-1/2 bg-white flex items-center">
          <img
            className="w-full object-cover object-center"
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className="md:w-1/2 md:pl-8 bg-white text-black px-5 py-10 flex flex-col justify-between text-center">
          <h1 className="text-4xl font-bold mb-4 ">{product.title}</h1>
          <p className="text-gray-700 text-lg mb-4">{product.description}</p>
          <p className="text-gray-700 text-3xl font-bold mb-4">
            <span>Price: </span>${product.price}
          </p>
          <p className="text-gray-700 text-lg mb-4">
            Category: {product.category}
          </p>
          <div className="flex items-center justify-center text-xl">
            <p className="mr-3 font-semibold">Rating:</p>
            {product.rating && (
              <Rating
                initialValue={product.rating.rate}
                readonly={true}
                size={30}
              />
            )}
            {/* {product.rating && (
                <div className="flex items-center">
                  <span className="text-gray-700">Rating: </span>
                  <span className="text-yellow-500 ml-1">
                    {Array.from({
                      length: Math.round(product.rating.rate),
                    }).map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 0c-2.761 0-5 2.239-5 5 0 3.037 3.9 7.128 4.293 7.542.146.154.35.237.557.237s.411-.083.557-.237C11.1 12.128 15 8.037 15 5c0-2.761-2.239-5-5-5zm0 8.75a2.344 2.344 0 100-4.688 2.344 2.344 0 000 4.688z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </span>
                  <span className="text-gray-700 ml-1">
                    ({product.rating.count})
                  </span>
                </div>
              )} */}
          </div>
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mt-4 ">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
Product.propTypes = {
  id: PropTypes.number,
};

export default Product;
