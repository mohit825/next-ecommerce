import { useCart } from "../../../context/CartContext";
import CartProduct from "../CartProduct/CartProduct";
import LowestOfferContainer from "../../atoms/LowestOfferContainer/LowestOfferContainer";
const CartItems = () => {
  const { cartItem } = useCart();

  const showItem = (
    <div>
      <CartProduct items={cartItem} />
      <LowestOfferContainer />
    </div>
  );

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
