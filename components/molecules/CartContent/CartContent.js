import { CartContainer } from "../CartProduct/Popup";
import { useCart } from "../../../context/CartContext";
import CartItems from "../CartItems/CartItems";
import CartSubmitBtn from "../../atoms/CartSubmitButton/CartSubmitBtn";

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
