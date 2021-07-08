import { CartContainer } from "../../styles/styled-component/Popup";
import { useCart } from "../../context/CartContext";
import CartItems from "./CartItems";
import CartSubmitBtn from "./CartSubmitBtn";

const CartContent = () => {
  const { cartItem, closePopup } = useCart();
  return (
    <CartContainer>
      <div className="cart-access">
        <span>My Cart ({cartItem.length} Items)</span>
        <img
          className="cross"
          onClick={closePopup}
          src="/static/images/cancel.png"
        />
      </div>
      <CartItems />
      <CartSubmitBtn />
    </CartContainer>
  );
};

export default CartContent;
