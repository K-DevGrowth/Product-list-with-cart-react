import { useCallback, useMemo, useState } from "react";

const useCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = useCallback((product, amount = 1) => {
    setCartItems((prev) => {
      const existingProduct = prev.find(
        (item) => item.product.name === product.name
      );

      if (existingProduct) {
        return prev.map((item) =>
          item.product.name === product.name
            ? { ...item, amount: item.amount + amount }
            : item
        );
      }

      return [...prev, { product, amount }];
    });
  }, []);

  const removeFromCart = useCallback((product) => {
    setCartItems((prev) =>
      prev.filter((item) => item.product.name !== product.name)
    );
  }, []);

  const updateQuantity = useCallback((product, delta) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.product.name !== product.name) return item;

        const newAmount = item.amount + delta;
        return newAmount > 0 ? { ...item, amount: newAmount } : item;
      })
    );
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const totalItems = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.amount, 0);
  }, [cartItems]);

  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => {
      return total + item.product.price * item.amount;
    }, 0);
  }, [cartItems]);

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
  };
};

export default useCart;
