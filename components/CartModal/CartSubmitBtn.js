import { CartSubmitBtnStyle } from "../../styles/styled-component/LowestOfferStyle";
import { useCart } from "../../context/CartContext";
import {
  CartButton,
  FlatButton,
} from "../../styles/styled-component/ButtonStyle";

const CartSubmitBtn = () => {
  const { cartItem, closePopup, totalCartPrice } = useCart();

  return (
    <CartSubmitBtnStyle>
      {cartItem.length ? (
        <>
          <span className="center">
            Promo Code can be applied on payment page
          </span>
          <CartButton onClick={closePopup} type="longBtn" className="cart-btn">
            <p>Proceed to Checkout</p>
            <p>Rs.{totalCartPrice} &nbsp; &gt; </p>
          </CartButton>
        </>
      ) : (
        <FlatButton onClick={closePopup} type="longBtn" className="cart-btn">
          Start Shopping
        </FlatButton>
      )}
    </CartSubmitBtnStyle>
  );
};

export default CartSubmitBtn;
