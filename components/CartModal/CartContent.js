import { CartContainer } from "../../styles/styled-component/Popup";
import { useCart } from "../../context/CartContext";
import CartItems from "./CartItems";
import { FlatButton } from "../../styles/styled-component/ButtonStyle";
const CartContent = () => {
  const { cartItem, closePopup } = useCart();
  return (
    <CartContainer>
      <div className="cart-access">
        <span>My Cart ({cartItem.length} Items)</span>
        <span className="cross" onClick={closePopup}>
          cross
        </span>
      </div>
      <CartItems />
      {cartItem.length ? (
        <FlatButton type="longBtn" className="cart-btn">
          Checkout
        </FlatButton>
      ) : (
        <FlatButton type="longBtn" className="cart-btn">
          Start Shopping
        </FlatButton>
      )}
    </CartContainer>
  );
};

export default CartContent;
