const CURRENCY_FORMAT = {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};

export const getCartItemQuantity = (cartItems, productName) => {
  const item = cartItems.find((item) => item.product.name === productName);
  return item?.amount || 0;
};

export const formatCurrency = (amount) => {
  return amount.toLocaleString("en-US", CURRENCY_FORMAT);
};
