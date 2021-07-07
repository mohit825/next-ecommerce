import { useCart } from "../../context/CartContext";
import CartProduct from "../../ui/Cart/CartProduct";
const CartItems = () => {
  const { cartItem } = useCart();

  // useEffect(() => {
  //   // add();
  //   // getId();
  // }, [cartItem]);
  const showItem = <CartProduct items={cartItem} />;

  const noItem = (
    <div className="no-item">
      <p>No Items in Your cart</p>
      <p>Your favourite items are just a click away.</p>
    </div>
  );
  return cartItem.length ? (
    <section className="product-display">{showItem}</section>
  ) : (
    noItem
  );
};

export default CartItems;
