import { useContext } from "react";
// import { getCartData } from "./index";
// import Header from "./Header";
import CartItemCard from "./CartItemCard";
import { CartContext } from "./AppRouter";

const Cart = () => {
  const { cart } = useContext(CartContext);

  const totalPrice = cart.items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div>
      {cart?.items?.map((item) => (
        <CartItemCard item={item} key={item.id} />
      ))}
      <p>
        <b className="p-3">Total price :</b> ${totalPrice.toFixed(2)}
      </p>
    </div>
  );
};

export default Cart;
