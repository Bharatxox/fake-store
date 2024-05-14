import { useState, useEffect } from "react";
import { getCartData } from "./index";
import Header from "./Header";

const Cart = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    getCartData()
      .then((val) => setdata(val))
      .catch(console.log);
  }, []);

  return (
    <div>
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Cart</h1>
        {data.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  className="w-full h-56 object-cover object-center"
                  src={item.image}
                  alt={item.title}
                />
                <div className="px-6 py-4">
                  <h2 className="font-bold text-xl mb-2">{item.title}</h2>
                  <p className="text-gray-700 text-base">{item.description}</p>
                  <p className="text-gray-700 text-base">${item.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
