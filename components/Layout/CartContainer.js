import Cart from "../../ui/Cart";
import CartItemPlaceholder from "./CartItemPlaceholder";

const CartContainer = () => {
  return (
    <div className="cart-container">
      <Cart />
      <CartItemPlaceholder />
    </div>
  );
};

export default CartContainer;
