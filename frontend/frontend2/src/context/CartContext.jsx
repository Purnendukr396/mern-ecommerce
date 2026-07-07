import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exist = cart.find((item) => item._id === product._id);

    if (exist) {
      setCart(
        cart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (_id) => {
    setCart(
      cart.map((item) =>
        item._id === _id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (_id) => {
    setCart(
      cart
        .map((item) =>
          item._id === _id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (_id) => {
    setCart(cart.filter((item) => item._id !== _id));
  };

  const clearCart = () => {
  setCart([]);
};

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;