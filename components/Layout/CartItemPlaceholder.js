import { useCart } from "../../context/CartContext";

const CartItemPlaceholder = () => {
  const { cartItem } = useCart();

  return <span> {cartItem.length} Items</span>;
};

export default CartItemPlaceholder;
