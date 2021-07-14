import { Overlay } from "../../molecules/CartProduct/Popup";
import CartContent from "../../molecules/CartContent/CartContent";
import { useCart } from "../../../context/CartContext";
const CartPopup = () => {
  const { modal } = useCart();
  return (
    <Overlay modal={modal} className="overlay">
      <CartContent />
    </Overlay>
  );
};

export default CartPopup;
