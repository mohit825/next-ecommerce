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
        <span className="cross" onClick={closePopup}>
          cross
        </span>
      </div>
      <CartItems />
      <CartSubmitBtn />
    </CartContainer>
  );
};

export default CartContent;
