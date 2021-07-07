import { useCart } from "../../context/CartContext";

const CartItemPlaceholder = () => {
  const { cartLength } = useCart();

  return <span> {cartLength} Items</span>;
};

export default CartItemPlaceholder;
