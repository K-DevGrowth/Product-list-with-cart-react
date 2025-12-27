const AddToCartButton = ({ onAdd }) => {
  return (
    <div>
      <button
        type="button"
        onClick={onAdd}
        className="absolute z-40 top-4/7 left-1/2 -translate-x-1/2 font-semibold border border-Red bg-Rose-50 rounded-2xl px-3 py-2 w-full max-w-[80%]"
      >
        <img className="inline-block pr-1" src="icon-add-to-cart.svg" alt="" />
        Add to cart
      </button>
    </div>
  );
};

export default AddToCartButton;
