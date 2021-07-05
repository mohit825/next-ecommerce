import { Overlay } from "../../styles/styled-component/Popup";
import CartContent from "./CartContent";
import { useCart } from "../../context/CartContext";
const CartPopup = () => {
  const { modal } = useCart();
  return (
    <Overlay modal={modal} className="overlay">
      <CartContent />
    </Overlay>
  );
};

export default CartPopup;
