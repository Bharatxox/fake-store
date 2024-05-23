import HomePage from "./HomePage";
import Cart from "./Cart";
import Product from "./Product";
import PrivateRoute from "./PrivateRoute";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./LoginPage";
import { createContext, useReducer } from "react";

export const CartContext = createContext();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "home",
    element: <HomePage />,
  },
  {
    path: "cart",
    element: (
      <PrivateRoute>
        <Cart />
      </PrivateRoute>
    ),
  },
  {
    path: "products/:productId",
    element: (
      <PrivateRoute>
        <Product />
      </PrivateRoute>
    ),
  },
]);

export const CART_ACTION_TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  INCREASE_QUANTITY: "INCREASE_QUANTITY",
  DECREASE_QUANTITY: "DECREASE_QUANTITY",
};

const AppRouter = () => {
  const cartReducer = (state, { type, payload }) => {
    switch (type) {
      case CART_ACTION_TYPES.ADD_TO_CART:
        return {
          ...state,
          items: [...state.items, { ...payload, quantity: 1 }],
        };
      case CART_ACTION_TYPES.REMOVE_FROM_CART:
        return {
          ...state,
          items: state.items.filter(({ id }) => id !== payload),
        };

      case CART_ACTION_TYPES.INCREASE_QUANTITY:
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === payload
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };

      case CART_ACTION_TYPES.DECREASE_QUANTITY:
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === payload && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
          // .filter((item) => item.quantity > 0),
        };

      default:
        return state;
    }
  };

  const [cart, dispatch] = useReducer(cartReducer, {
    items: [],
  });
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      <RouterProvider router={router} />
    </CartContext.Provider>
  );
};
// const AppRouter = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/products/:productId" element={<Product />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

export default AppRouter;
