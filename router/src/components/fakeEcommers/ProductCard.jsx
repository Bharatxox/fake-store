import PropTypes from "prop-types";
import { memo } from "react";

const ProductCard = ({ product, onClick }) => {
  return (
    <div
      className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden py-5 mx-5"
      onClick={() => onClick(product.id)}
    >
      <div className=" flex justify-center">
        <img
          className="max-h-36 object-cover object-center"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{product.title}</h2>
        <p className="text-gray-700 text-base">{product.description}</p>
        <p className="text-gray-700 text-base">${product.price}</p>
      </div>
      <div className="px-6 py-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
ProductCard.propTypes = {
  product: PropTypes.object,
  onClick: PropTypes.func,
};
const memoProductCard = memo(ProductCard);
export default memoProductCard;
// export default ProductCard;
